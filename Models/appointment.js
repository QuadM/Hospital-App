const mongoose = require("mongoose");

// Appointment database schema
const AppointmentSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
  },
  PatientName: {
    type: String,
    required: true,
  },
  DoctorName: {
    type: String,
    required: true,
  },
  reservations: {
    type: Object,
    required: false,
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema, "clinic");
