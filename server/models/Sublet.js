const mongoose = require('mongoose');
const { Schema } = mongoose;

const subletSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

mongoose.model('sublets', subletSchema);
