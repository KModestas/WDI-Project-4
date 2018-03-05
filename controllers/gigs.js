// const Gig = require('../models/gig');
const rp = require('request-promise');

function gigsIndex(req, res) {
  // put in here a request to the skiddle api that shows all events in london and returns it as json

  rp({
    url: 'http://www.skiddle.com/api/v1/events/search',
    method: 'GET',
    json: true, // asking for json format back from their api
    qs: {
      api_key: process.env.SKIDDLE_API_KEY,
      latitude: 51.515030,
      longitude: -0.073162,
      radius: 5,
      eventcode: 'LIVE'
    }
  })
    .then((response) => {
      res.json(response); // res is sending the data to client side
    })
    .catch((err) => {
      res.json(err);
    });
}


function gigsShow(req, res, next) {
  // put in here a request to the skiddle api that shows one event and returns it as json

  // Gig
  //   .findById(req.params.id)
  //   .exec()
  //   .then((gig) => {
  //     if(!gig) return res.notFound();
  //     res.json(gig);
  //   })
  //   .catch(next);
}

// function gigsCreate(req, res, next) {
//   Gig
//     .create(req.body)
//     .then(gig => res.status(201).json(gig))
//     .catch(next);
// }
//
// function gigsUpdate(req, res, next) {
//   Gig
//     .findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(gig => res.status(200).json(gig))
//     .catch(next);
// }

function gigsDelete(req, res, next) {
  Gig
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(next);
}


module.exports = {
  index: gigsIndex,
  show: gigsShow,
  // create: gigsCreate,
  // update: gigsUpdate,
  delete: gigsDelete
};
