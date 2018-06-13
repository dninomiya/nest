import * as functions from 'firebase-functions';
import * as webshot from 'webshot';
import * as gcs from '@google-cloud/storage';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';

const shotOptions = {
  windowSize: {
    width: 800,
    height: 800,
    renderDelay: 2000
  },
  defaultWhiteBackground: true
}

const bucket = gcs().bucket('update-hub.appspot.com');

const shotWebSite = (url, tmpPath, uploadFilePath) => {
  return new Promise((resolve, reject) => {
    webshot(url, tmpPath, shotOptions, () => {
      bucket.upload(tmpPath, {
        destination: `users/${uploadFilePath}`,
        metadata: {
          contentType: 'image/png',
        },
      }).then(res => {
        fs.unlinkSync(tmpPath)
        resolve();
      }).catch(res => {
        reject();
      })
    })
  });
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const isValid = (oldValue = [], newArray) => {
  if (!newArray || !newArray[0]) {
    return false;
  }

  let notSame = true;

  newArray.forEach((work, index) => {
    notSame = !oldValue[index] || (oldValue[index].url !== work.url);
  });

  return notSame;
}

export const createWorkThumbnails = functions.firestore
  .document('users/{uid}')
  .onUpdate((change, context) => {
    const newValue = change.after.data();
    const oldValue = change.before.data();

    if (!isValid(oldValue.works, newValue.works)) return 'no changes.';

    const urls = newValue.works.map(data => data.url);

    const start = async () => {
      await asyncForEach(urls, async (url, index) => {
        const i = index + 1;
        const uploadFilePath = `${context.params.uid}/work-${i}.png`;
        const tmpPath = path.join(os.tmpdir(), uploadFilePath);
        await shotWebSite(url, tmpPath, uploadFilePath);
      });
    }

    return start()
  });
