const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Gig = require('../models/gig');

const gigData = [{
  title: 'Reading Festival',
  image: 'https://cdn2.techadvisor.co.uk/cmsdata/features/3663192/reading-festival-stage_thumb800.jpg',
  location: 'Reading, Leeds',
  date: '2018'
},
{
  title: 'Wireless',
  image: 'https://content.ticketarena.co.uk/media/5932/derek-bremner-the-1975-2f3924bc-45cf-11e6-bf2c-3645563dd1ea-web.jpg?height=768&mode=crop&width=1024',
  location: 'Finsbury Park, London',
  date: '2018'
},
{
  title: 'Lovebox',
  image: 'https://media.timeout.com/images/102150183/630/472/image.jpg',
  location: 'Gunnersbury Park, London',
  date: '2018'
}];
