const mongoose = require("mongoose");

const questions = {
    title: {
        type: String,
        trim: true
    },
    body: {
        type: String,
        trim: true
    },
    answers: {
        type: [String],
        trim: true
    },
    photo: String
}

const quizSchema = new mongoose.Schema({
    newsQuiz: {
        quiz: [questions]
    }

})


module.exports = mongoose.model("Quiz", quizSchema)