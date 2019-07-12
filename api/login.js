const app = require('./util/app');
const mongooseConnect = require('./util/mongoose');
const UserSchema = require('../models/user');


[...mongooseConnect];


app.post('*', async (req, res) => {
  const user = req.body;
  const validateUser = await UserSchema.findOne({ mail: user.mail, pass: user.pass });
  if (validateUser) {
    res.status(201).send(validateUser.id);
  } else {
    res.status(400).send();
  }

});

/*app.get('/registro', async (req, res) => {
  try {
    const user = new UserSchema({
      name: "Sophie",
      lastName: "Green",
      birthday: "01/12/2019",
      interest: 'Acampar con mis amigos',
      mail: 'foo@mail.com',
      pass: "123456",
      history: "Debemos proteger el medio ambiente",
      perfilImg: '/static/queengreen.jpg',
      frontPageImg: '/static/queenfront.jpg',
      wallet: 500,
      gifts: 2,
      comments: 1,
    });
    const resp = await user.save();
    res.status(200).send(resp);
  } catch(err) {
    res.status(500).send(err);
  }
});

/*app.get('/api/perfil', async (req, res) => {
  const { id } = req.query;
  const user = await UserSchema.findById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).send();
  }
});

app.post('/api/friendRequest', async (req, res) => {
  try {
    const { currentUser, targetUser } = req.body;
    const newFriend = await UserSchema.findById(currentUser);
    const resp = await UserSchema.findByIdAndUpdate(targetUser, {
      $push: {
        friendReq: {
          $each: [newFriend],
          $position: 0
        }
      }
    });
    console.log(resp);
    res.status(200).send('solicitud enviada');
  } catch(err){
    res.status(500).send();
  }
});*/


module.exports = app;
