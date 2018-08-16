const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const questionsSchema = new mongoose.Schema({
  question: {
    type: String,
    trim: true
  },
  answers: [
    {
      answer: {
        type: String,
        trim: true
      },
      is_right: Boolean
    }
  ]
});

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  body: {
    type: String,
    trim: true
  },
  quiz: [questionsSchema]
});

module.exports = mongoose.model("Quiz", quizSchema);
