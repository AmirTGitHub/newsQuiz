import React from "react";
import { Button, Card, CardBody, CardText, CardImg, Col } from "reactstrap";

const Quiz = props => {
  console.log(props.quiz);
  const { body, answers, allAnswers } = props;
  return props.quiz.map(quiz =>
    quiz.quiz.map(item => {
      return item.question !== "" ? (
        <Col className="quiz" key={quiz._id} sm={8}>
          <h1 className="quiz-intro-title">{quiz.title}</h1>
          <p className="quiz-intro-body">{quiz.body}</p>
          <Card>
            {item.photo ? (
              <CardImg
                top
                sm={8}
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
            ) : null}
            <CardBody sm={8}>
              <CardText className="quiz--title">{item.question}</CardText>
              {item.answers.map((answer, index) => (
                <Col sm={8} key={answer._id} className="answer">
                  <Button
                    className="answer--btn"
                    name={index}
                    onClick={props.checkAnswer}
                  >
                    {answer.answer}
                  </Button>
                </Col>
              ))}
            </CardBody>
          </Card>
        </Col>
      ) : null;
    })
  );
};

export default Quiz;
