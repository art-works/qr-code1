
const serverless = require('serverless-http');
const express = require('express');
const qrr = require('qr-image');

const app = express();
const qrrouter = express.Router();

qrrouter.route('/qr')
  .get((req, res) => {
    const query = {};
    if (req.query.myurl) {
      query.myurl = req.query.myurl;
    }
    const urlvalue = req.query;
    const myurlpass = urlvalue.myurl;
    const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(myurlpass)) {
      res.send('Please provide a valid URL.');
    } else {
      const code = qrr.image(myurlpass, { type: 'png' });
      res.setHeader('Content-type', 'image/png');
      code.pipe(res);
    }
  });

app.use('/', qrrouter);

app.get('/', (req, res) => {
  res.send('Welcome to QR code creation');
});

const binaryMimeTypes = {
  binary: [
    'image/*',
    '*/*',
    'image/png',
  ]
};

module.exports.handler = serverless(app, binaryMimeTypes)