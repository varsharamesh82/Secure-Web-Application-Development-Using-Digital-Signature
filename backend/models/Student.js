const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  school: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  certs: [
    {
      uuid: { type: String, required: true },
      count: { type: Number, required: true },
      date: { type: Date, required: true },
    },
  ],
});

module.exports = student = mongoose.model("student", studentSchema);
