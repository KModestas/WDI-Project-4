const User = require('../models/user');


function favouriteGig(req, res, next) {
  User
    .findById(req.currentUser.id)
    .then(user => {
      if(!user) return res.notFound();
      user.gigs.push(req.body);
      return user.save();
    })
    .then(user => {
      res.json(user);
    })
    .catch(next);
}

function unTrackGig(req, res, next) {
  User
    .findById(req.currentUser.id)
    .then(user => {
      if (!user) return res.notFound();

      user.gigs.map( gig => {
        if (gig.id === req.body) {
          user.gigs.splice(gig);
        }
        return user.save();
      });
    })
    .then(user => {
      res.json(user);
    })
    .catch(next);

}


function show(req, res, next) {
  User
    .findById(req.currentUser.id)
    .then(user => {
      if(!user) return res.notFound();
      return res.json(user);
    })
    .catch(next);
}

module.exports = {
  favouriteGig,
  unTrackGig,
  show
};
