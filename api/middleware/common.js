const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const dotenv = require('dotenv');
//{"src":"package.json","use":"@now/static-build"},
/*    "now-build": "next build && next export -o dist",
    "now-dev": "next -p $PORT"*/
module.exports = [
  dotenv.config(),
  helmet(),
  cors(),
  compression(),
  bodyParser.json({ limit: "16mb", extended: true }),
  bodyParser.urlencoded({ limit: "16mb", extended: true })
];
