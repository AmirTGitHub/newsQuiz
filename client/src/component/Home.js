import React, { Component } from "react";
import { Col, Button } from "reactstrap";
import CreatePoll from "./CreatePoll";

export default class Home extends Component {
  state = {
    quizCounter: 1,
    questions: [],
    counter: 1,
    answers: [],
    correctAnswer: null
  };
  addQuestions = () => {
    this.setState({
      quizCounter: this.state.quizCounter + 1,
      questions: [...new Array(this.state.quizCounter)]
    });
  };
  addAnswer = () => {
    this.setState({
      counter: this.state.counter + 1,
      answers: [...new Array(this.state.counter)]
    });
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  correctAnswer = event => {
    this.setState({
      correctAnswer: event.target.name
    });
  };
  onSubmit = () => {
    console.log(this.state);
    this.setState({
      counter: 1,
      answers: [],
      body: "",
      correctAnswer: null,
      answer0: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
      photo: ""
    });
  };
  render() {
    const { questions } = this.state;
    return (
      <div>
        <Col>
          <Col sm={8} className="text-center">
            <Button
              type="submit"
              color="success"
              block
              onClick={this.addQuestions}
            >
              Add Quiz
            </Button>
          </Col>
          {questions.map((item, index) => {
            return (
              <CreatePoll
                questionCounter={this.state.quizCounter}
                answerCounter={this.state.counter}
                key={index + 1}
                answers={this.state.answers}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                addAnswer={this.addAnswer}
                correctAnswer={this.correctAnswer}
              />
            );
          })}
        </Col>
        <Col sm={8} className="text-center">
          <Button color="warning" block onClick={this.onSubmit}>
            save
          </Button>
        </Col>
      </div>
    );
  }
}
