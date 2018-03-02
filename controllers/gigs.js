const Gig = require('../models/gig');

function gigsIndex(req, res, next) {
  Gig
    .find()
    .exec()
    .then(gigs => res.json(gigs))
    .catch(next);
}

module.exports = {
  index: gigsIndex
};
