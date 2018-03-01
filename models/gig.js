const mongoose = require('mongoose');

const gigSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true }
});


gigSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports =  mongoose.model('gig', gigSchema);
