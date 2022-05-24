const mongoose = require("mongoose");

// Doctor database schema
const DoctorSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  reservations: {
    type: Object,
    required: false,
  },
});

module.exports = mongoose.model("Doctor", DoctorSchema, "clinic");
