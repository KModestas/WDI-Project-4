const Gig = require('../models/gig');

function gigsIndex(req, res, next) {
  Gig
    .find()
    .exec()
    .then(gigs => res.json(gigs))
    .catch(next);
}

function gigsShow(req, res, next) {
  Gig
    .findById(req.params.id)
    .exec()
    .then((gig) => {
      if(!gig) return res.notFound();
      res.json(gig);
    })
    .catch(next);
}

module.exports = {
  index: gigsIndex,
  show: gigsShow
};
