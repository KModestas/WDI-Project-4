const router = require('express').Router();
const gigs = require('../controllers/gigs');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const users = require('../controllers/users');


// routes go here

router.route('/profile')
  .get(secureRoute, users.show);

router.route('/gigs/favourite')
  .post(secureRoute, users.favouriteGig);

router.route('/gigs')
  .get(gigs.index);

router.route('/gigs/:id')
  .get(gigs.show);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);


router.all('/*', (req, res) => res.notFound());

module.exports = router;
