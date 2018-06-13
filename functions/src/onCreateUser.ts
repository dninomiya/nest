import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const welcomeText = (uid, name) => {
return `
Updateへようこそ！

まずは${name}さんのレジュメを登録してください。
https://update-hub.firebaseapp.com/users/${uid}

登録が終わったらさっそくトレーニングをはじめましょう！
`};

export const onCreateUser = functions.auth.user().onCreate(user => {
  const userMailOptions = {
    from: `Update <update@deer.co.jp>`,
    to: user.email,
    subject: `Update へようこそ！`,
    text: welcomeText(user.providerData[0].uid, user.displayName || user.email.split('@')[0])
  };

  const userTask = mailTransport.sendMail(userMailOptions).then(() => {
    console.log('New welcome email sent to:', user.email);
  });

  const adminMailOptions = {
    from: `Update <update@deer.co.jp>`,
    to: gmailEmail,
    subject: `${user.displayName || user.email.split('@')[0]} がUpdateに登録しました。`,
    text: `email: ${user.email}`
  };

  const adminTask = mailTransport.sendMail(adminMailOptions).then(() => {
    console.log('New admin email');
  });

  return Promise.all([userTask, adminTask]);
});