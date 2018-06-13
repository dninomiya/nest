"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const webshot = require("webshot");
const gcs = require("@google-cloud/storage");
const path = require("path");
const os = require("os");
const fs = require("fs");
const shotOptions = {
    windowSize: {
        width: 800,
        height: 800,
        renderDelay: 2000
    },
    defaultWhiteBackground: true
};
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
                fs.unlinkSync(tmpPath);
                resolve();
            }).catch(res => {
                reject();
            });
        });
    });
};
function asyncForEach(array, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < array.length; index++) {
            yield callback(array[index], index, array);
        }
    });
}
const isValid = (oldValue = [], newArray) => {
    console.log(oldValue);
    console.log(newArray);
    if (!newArray || !newArray[0]) {
        return false;
    }
    let notSame = true;
    newArray.forEach((work, index) => {
        notSame = !oldValue[index] || (oldValue[index].url !== work.url);
    });
    return notSame;
};
exports.createWorkThumbnails = functions.firestore
    .document('users/{uid}')
    .onUpdate((change, context) => {
    const newValue = change.after.data();
    const oldValue = change.before.data();
    if (!isValid(oldValue.works, newValue.works))
        return 'no changes.';
    const urls = newValue.works.map(data => data.url);
    const start = () => __awaiter(this, void 0, void 0, function* () {
        yield asyncForEach(urls, (url, index) => __awaiter(this, void 0, void 0, function* () {
            const i = index + 1;
            const uploadFilePath = `${context.params.uid}/work-${i}.png`;
            const tmpPath = path.join(os.tmpdir(), uploadFilePath);
            yield shotWebSite(url, tmpPath, uploadFilePath);
        }));
    });
    return start();
});
//# sourceMappingURL=createWorkThumbnails.js.map