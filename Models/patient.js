const mongoose = require("mongoose");

// Patient database schema
const PatientSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
  },
  name: {
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

module.exports = mongoose.model("Patient", PatientSchema, "crew");
