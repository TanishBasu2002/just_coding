import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  enterQuestion: {
    type: String,
    required: true,
    minLength: [3, " must be of at least 3 Characters."],
    maxLength: [1000, "Try to make in shorter than 1000 words"],
  },
  psudoCode: {
    type: String,
    required: true,
    minLength: [3, "PsudoCode must be of at least 3 Characters."],
    maxLength: [10, "PsudoCode cannot exceed 10 Characters."],
  },
  option_a: {
    type: String,
    required: true,
  },
  option_b: {
    type: String,
    required: true,
  },
  option_c: {
    type: String,
    required: true,
  },
  option_d: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", formSchema);
