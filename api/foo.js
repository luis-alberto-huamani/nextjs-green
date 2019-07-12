/*const app = require('./util/app');

app.get('*', (req, res) => {
  const name = req.query;
  res.status(200).send(`bienvenido ${name}`);
});

module.exports = app;*/

const app = require('./util/app');
const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '821952',
  key: 'bfb62abbe03a8b1e8c89',
  secret: '545cc02b18a4fa944315',
  cluster: 'us2',
  encrypted: true
});

app.get('*', (req, res) => {
  pusher.trigger('push', 'my-push', {"message": "hello world"});
  res.status(200).send('hey');
})

module.exports = app;

