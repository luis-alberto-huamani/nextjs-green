const app = require('./util/app');
const Pusher = require('pusher');
const axios = require('axios');

var pusher = new Pusher({
  appId: '821952',
  key: 'bfb62abbe03a8b1e8c89',
  secret: '545cc02b18a4fa944315',
  cluster: 'us2',
  encrypted: true
});

app.get('*', async (req, res) => {
  const resp = await pusher.trigger('push', 'my-push', {"message": "hello world"});
  res.status(200).send();
})

app.listen(4000, console.log('server on'));
