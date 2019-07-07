const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');
const cloudinary = require('cloudinary').v2;

[...mongooseConnect];

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

app.post('*', async (req, res) => {
  try {
    const { id, author, date, imgUrl, history  } = req.body;
    let newPost = {
      author,
      date,
      imgUrl,
      history,
    };
    if (imgUrl) {
      const cloudImg = await cloudinary.uploader.upload(imgUrl, (err, result) => err ? console.log(err) : result );
      newPost.imgUrl = cloudImg.secure_url;
    }
    await UserSchema.findByIdAndUpdate(id, { $push: { posts: { $each: [newPost], $position: 0 } } }, (err, post) => {
      if(err) console.error(err);
      console.log(post);
    });
    res.status(200).send();
  } catch(err) {
    console.log(err);
    res.status(501).json(`error en el servidor: ${err}`);
  }
});

module.exports = app;
