import mongoose from "mongoose";
const Schema = mongoose.Schema;

const appointment = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contact_number: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};

const Appointment = mongoose.model("Appointment", appointment);

export default Appointment;
