const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const User = require('../models/user');

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });

      return res.json({ message: `Welcome ${user.username}`, token });
    })
    .catch(next);
}


// takes the data from the loginform that was sent, and uses it to find a user that matches the details in the DB. If no user or password is inccorect, error is thrown else will generate jwt token that expired in 1 hr and will return welcome message.

function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) return res.status(401).json({ message: 'Please enter a valid email and Password.' });

      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });
      return res.json({ message: `Welcome back ${user.username}`, token });
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
