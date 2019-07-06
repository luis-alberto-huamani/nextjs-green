const app = require('./util/app');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

app.post('*', async (req, res) => {
  const img = req.body.img;
  const name = req.body.name;
  const url = await cloudinary.uploader.upload(img, (error, result) => {
    return result;
  });
  console.log(url.url);
  res.status(201).send(url.url);
});

module.exports = app;
