import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Answer from "./Answer";

export default class CreatePoll extends Component {
  render() {
    const { body, answers } = this.props;
    return (
      <Form>
        <FormGroup>
          <Label className="label" sm={8}>
            سوال را اینجا بنویسید
          </Label>
          <Col sm={8}>
            <Input
              type="textarea"
              name="question"
              className="input question"
              value={body}
              onChange={this.props.onChange}
              placeholder="متن سوال را اینجا بنویسید"
            />
          </Col>
        </FormGroup>
        <Button
          color="success"
          onClick={this.props.AddAnswer}
          disabled={answers.length === 4 ? true : false}
        >
          addAnswer
        </Button>
        {answers.length > 0
          ? answers.map((item, index) => {
              return (
                <Answer
                  key={index}
                  index={index}
                  onChange={this.props.onChange}
                  correctAnswer={this.props.correctAnswer}
                />
              );
            })
          : null}

        <Button color="warning" onClick={this.props.save}>
          save
        </Button>
      </Form>
    );
  }
}
