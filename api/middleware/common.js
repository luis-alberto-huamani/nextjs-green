const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const doteEnv = require('dotenv');
doteEnv.config();

module.exports = [
  helmet(),
  cors(),
  compression(),
  bodyParser.json({ limit: "16mb", extended: true }),
  bodyParser.urlencoded({ limit: "16mb", extended: true })
];
