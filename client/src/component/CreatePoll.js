import React, { Component, Fragment } from "react";
import { Col, Button, FormGroup, Label, Input, FormText } from "reactstrap";
import AddAnswer from "./AddAnswer";

class CreatePoll extends Component {
  render() {
    return (
      <Col sm={8}>
        <FormGroup row>
          <Label sm={2} className="question">
            متن سوال را بنویسید
          </Label>
          <br />
          <Col sm={8}>
            <Input
              type="textarea"
              name={`body ${this.props.questionCounter}`}
              id="body"
              placeholder="متن سوال را اینجا بنویسید"
              onChange={this.props.onChange}
            />
          </Col>
        </FormGroup>
        {this.props.answers.map((item, index) => {
          return (
            <AddAnswer
              question={this.props.questionCounter}
              key={index + 1}
              number={this.props.answerCounter}
              onChange={this.props.onChange}
              //   correct={this.props.correctAnswer}
              //   disabled={correctAnswer !== null ? true : false}
            />
          );
        })}
        <Col sm={8}>
          <Button
            color="primary"
            onClick={this.props.addAnswer}
            // disabled={counter === 7 ? true : false}
            block
          >
            گزینه اضافه کنید
          </Button>
        </Col>
        <Col sm={8}>
          <FormGroup encType="multipart/form-data">
            <Label className="question">عکس اضافه کنید</Label>
            <Input
              sm={8}
              type="file"
              name="file"
              id="exampleFile"
              className="upload"
              accept="image/JPG,image/png"
            />
            <FormText color="muted" className="question">
              عکس با فورمت‌های جی‌پی‌جی و پی‌ان‌جی را میتوانید آپلود کنید
            </FormText>
          </FormGroup>
        </Col>
        {/* <Col sm={8}>
          <Button type="submit" color="success" block onClick={this.onSubmit}>
            save
          </Button>
        </Col> */}
      </Col>
    );
  }
}

export default CreatePoll;
