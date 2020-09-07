const mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({

  bookName: {

    type: String,

    required: 'This field is required'

  },

  author: {

    type: String,

    required: 'This field is required'

  },

  publicer: {

    type: String,

    required: 'This field is required'

  },

  dop: {

    type: Date,

    required: 'This field is required'

  },

  price: {

    type: String,

    required: 'This field is required'

  },
  type: {

    type: String,

    required: 'This field is required'

  }

});

mongoose.model("Student", studentSchema);