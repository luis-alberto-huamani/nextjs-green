const app = require('./util/app');
//const mongooseConnect = require('./util/mongoose');
//const UserSchema = require('../models/user');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage });

/*[...mongooseConnect];

app.post('/registro', async (req, res) => {
  const data = req.body;
  
  newUser = new UserSchema(data);

  const toSave = await newUser.save();
  if(toSave) {
    res.status(201).send(toSave.id);
  } else {
    res.status(400).send();
  }
});*/

app.post('/api/foo', upload.single('avatar'), async (req,res) => {
  const data = {
    img: req.file,
    name: req.body.name,
  };
  console.log(data);
  res.status(200).json(data);
})

app.listen(4000);
