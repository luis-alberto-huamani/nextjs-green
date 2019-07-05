const app = require('./util/app');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../static')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage });

app.post('*', upload.single('avatar'), async (req,res) => {
  const data = {
    img: req.file,
    name: req.body.name,
  };
  res.status(200).json(data);
});

module.exports = app;
