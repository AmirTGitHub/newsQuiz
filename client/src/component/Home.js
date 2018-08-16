import React, { Component, Fragment } from "react";
import CreateQuiz from "./CreateQuiz";
import CreatePoll from "./CreatePoll";
import Quiz from "./Quiz";

export default class Home extends Component {
  state = {
    counter: 1,
    answers: [],
    question: "",
    answer0: "",
    answer1: "",
    answer2: "",
    answer3: "",
    correctAnswer: "",
    saved: false,
    allAnswers: [],
    allDataFromDB: [],
    title: "",
    body: ""
  };
  componentDidMount() {
    this.getData();
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  correctAnswer = event => {
    if (event.target.checked) {
      this.setState({
        correctAnswer: event.target.name
      });
    }
  };
  save = event => {
    event.preventDefault();
    this.setState({
      saved: true
    });
    const { answer0, answer1, answer2, answer3, correctAnswer } = this.state;
    this.setState({
      allAnswers: this.state.allAnswers.push(
        {
          answer: answer0,
          is_right: correctAnswer === "answer0" ? true : false
        },
        {
          answer: answer1,
          is_right: correctAnswer === "answer1" ? true : false
        },
        {
          answer: answer2,
          is_right: correctAnswer === "answer2" ? true : false
        },
        {
          answer: answer3,
          is_right: correctAnswer === "answer3" ? true : false
        }
      )
    });
    this.saveQuizToDB();
    this.getData();
  };
  AddAnswer = () => {
    this.setState({
      counter: this.state.counter + 1,
      answers: [...new Array(this.state.counter)]
    });
  };

  saveQuizToDB = async () => {
    const bodyToSend = {
      title: this.state.title,
      body: this.state.body,
      quiz: {
        question: this.state.question,
        answers: this.state.allAnswers
      }
    };
    await fetch("/api/quiz", {
      method: "POST",
      headers: {
        "content-type": "application/JSON"
      },
      body: JSON.stringify(bodyToSend)
    });
  };

  getData = async () => {
    this.setState({
      saved: false
    });
    const fetchData = await fetch("/api/quiz");
    const allQuiz = await fetchData.json();
    this.setState({
      allDataFromDB: allQuiz,
      saved: true
    });
  };

  render() {
    const { saved, answers, allDataFromDB } = this.state;
    return (
      <Fragment>
        <CreateQuiz onChange={this.onChange} />
        <CreatePoll
          save={this.save}
          onChange={this.onChange}
          correctAnswer={this.correctAnswer}
          AddAnswer={this.AddAnswer}
          answers={answers}
        />
        {saved ? <Quiz quiz={allDataFromDB} /> : null}
      </Fragment>
    );
  }
}
