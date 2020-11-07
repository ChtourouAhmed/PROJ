const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  "Are you experiencing any difficulty in breathing?": { type: String, required: true },
  "Are you experiencing muscle aches, weakness, or lightheadedness?": { type: String, required: true },
  "Are you having diarrhea, stomach pain, vomiting?": { type: String, required: true },
  "Do you have a runny nose?": { type: String, required: true },
  "Do you have fever higher than 38,2° C?": { type: String, required: true },
  "Email": { type: String, required: true },
  "Have you recently been in contact with a person with Coronavirus?": { type: String, required: true },
  "Have you traveled to any one of the destinations below in the last 21 days?": { type: String, required: true },
  "name": { type: String, required: true },
  "number": { type: String, required: true },

});

module.exports = mongoose.model('Thing', thingSchema);