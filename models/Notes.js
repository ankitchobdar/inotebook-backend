const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title : {
      type: String,
      required: true
    },
    tag : {
      type: String,
      default: "General"
    },
    descrption : {
      type: Date,
      required: Date.now
    },
    date : {
      type: Date,
      required: Date.now
    },
  });

  module.exports = mongoose.model('notes', NotesSchema)