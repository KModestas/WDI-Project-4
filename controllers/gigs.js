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

function gigsCreate(req, res, next) {
  Gig
    .create(req.body)
    .then(gig => res.status(201).json(gig))
    .catch(next);
}

function gigsUpdate(req, res, next) {
  Gig
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(gig => res.status(200).json(gig))
    .catch(next);
}

function gigsDelete(req, res, next) {
  Gig
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(next);
}


module.exports = {
  index: gigsIndex,
  show: gigsShow,
  create: gigsCreate,
  update: gigsUpdate,
  delete: gigsDelete
};
