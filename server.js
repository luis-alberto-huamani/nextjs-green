const app = require('./util/app');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const UserSchema = require('../models/user');
const mongooseConnect = require('./util/mongoose');
dotenv.config();

[...mongooseConnect];

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

app.post('/api/registro', async (req, res) => {
  const { mail, pass } = req.body;
  console.log(req.body);
  const newUser = new UserSchema({mail, pass});
  console.log(newUser);
  const isRegistred = await UserSchema.findOne({ mail: req.body.mail });
  console.log(isRegistred);
  if (isRegistred) {
    res.status(400).send();
  } else {
    const user = await newUser.save();
    console.log(user);
    res.status(201).send(user.id);
  }

});

app.post('/api/postregistro', async (req, res) => {
  const {
    id,
    name,
    lastName,
    perfilImg,
    history,
    birthday,
    interest,
    frontPageImg,
    frontPageQuote,
  } = req.body;
  try {
    const cloudPerfilImg = await cloudinary.uploader.upload(perfilImg, (err, result) => {
      if (err) console.log(err);
      return result;
    });
    const cloudFrontImg = await cloudinary.uploader.upload(frontPageImg, (err, result) => {
      if (err) console.log(err);
      return result;
    });
    const perfilUpdated = await UserSchema.findByIdAndUpdate(id, {
      name,
      lastName,
      birthday,
      history,
      interest,
      perfilImg: cloudPerfilImg.url,
      frontPageImg: cloudFrontImg.url,
      frontPageQuote,
    });
    if (perfilUpdated) {
      res.status(201).json(perfilUpdated);
    } else {
      res.status(500).send();
    }
  } catch(err) {
    console.log(err);
  }
});

app.get('/api/perfil/:id', async (req, res) => {
  const { id } = req.params;
  console.log('id');
  const user = await UserSchema.findById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).send();
  }
})

app.post('/api/foo', async (req, res) => {
  const img = req.body.img;
  const name = req.body.name;
  const url = await cloudinary.uploader.upload(img, (error, result) => {
    return result;
  });
  console.log(url.url);
  res.status(201).send(url.url);
});

app.listen(4000);
