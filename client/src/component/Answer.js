import React, { Component } from "react";
import {
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
const Answer = props => {
  return (
    <Col sm={8}>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input
              addon
              type="checkbox"
              name={`answer${props.index}`}
              onChange={props.correctAnswer}
            />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          className="input"
          name={`answer${props.index}`}
          value={props.answerText}
          placeholder="جواب را اینجا بنویسید و اگر جواب درست است تیک بزنید"
          onChange={props.onChange}
        />
      </InputGroup>
    </Col>
  );
};

export default Answer;
