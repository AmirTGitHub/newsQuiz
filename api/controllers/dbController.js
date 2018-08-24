const mongoose = require("mongoose");
const Quiz = mongoose.model("Quiz");

exports.homepage = (req, res) => {
  res.send({ message: "Hi from Express" });
};

exports.postQuiz = async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    const getQuiz = await Quiz.find();
    res.json(getQuiz);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
