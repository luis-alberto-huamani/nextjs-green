const app = require('./util/app');
const Pusher = require('pusher');
const fetch = require('isomorphic-unfetch');
const axios = require('axios');

var pusher = new Pusher({
  appId: '821952',
  key: 'bfb62abbe03a8b1e8c89',
  secret: '545cc02b18a4fa944315',
  cluster: 'us2',
  encrypted: true
});

app.get('*', (req, res) => {
  pusher.trigger('push', 'my-push', {"message": "hello world"});
  setTimeout(()=> {
    res.status(200).send('solicitud recibida');
  }, 5000);
})

//app.listen(4000, console.log('server on'));

module.exports = app; 
