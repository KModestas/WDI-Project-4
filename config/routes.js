const router = require('express').Router();
const gigs = require('../controllers/gigs');
const auth  = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

// routes go here

router.route('/gigs')
  .get(gigs.index);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
