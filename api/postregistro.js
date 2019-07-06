const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');

[...mongooseConnect];

app.post('*', async (req, res) => {
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

module.exports = app;