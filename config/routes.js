const router = require('express').Router();
const gigs = require('../controllers/gigs');
const auth  = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');


// routes go here

router.route('/gigs')
  .get(gigs.index)
  .post(gigs.create);

router.route('/gigs/:id')
  .get(gigs.show)
  .put(gigs.update)
  .delete(gigs.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);


router.all('/*', (req, res) => res.notFound());

module.exports = router;
