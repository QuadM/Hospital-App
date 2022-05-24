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
  dateOfBirth: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
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

module.exports = mongoose.model("Patient", PatientSchema, "clinic");
