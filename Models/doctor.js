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
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Doctor", DoctorSchema, "clinic");
