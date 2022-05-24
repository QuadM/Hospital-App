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
  ReceiptNo: {
    type: Object,
    required: false,
  },
  Date: {
    type: Date,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema, "clinic");
