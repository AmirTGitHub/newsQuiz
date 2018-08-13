import React from "react";
import { Col, FormGroup, Label, Input } from "reactstrap";

const AddAnswer = props => {
  return (
    <FormGroup row>
      <Label sm={2} className="question">
        جواب
      </Label>
      <br />
      <Col sm={8}>
        <Input
          type="email"
          name={`answer ${props.number} question ${props.question}`}
          className="answer"
          placeholder="گزینه را اینجا بنویسید"
          onChange={props.onChange}
        />
        <Label check sm={2} className="question">
          <Input
            type="radio"
            name={`answer ${props.number}`}
            onClick={props.correct}
            disabled={props.disabled}
          />{" "}
          جواب درست
        </Label>
      </Col>
    </FormGroup>
  );
};

export default AddAnswer;
