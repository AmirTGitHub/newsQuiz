import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const CreateQuiz = props => {
  return (
    <Col sm={8}>
      <Form>
        <FormGroup>
          <Label className="label" sm={8}>
            تیتر کویز
          </Label>
          <Col sm={8}>
            <Input
              type="input"
              name="title"
              className="input"
              value={props.title}
              onChange={props.onChange}
              placeholder="تیتر کویز را اینجا بنویسید"
            />
          </Col>
          <Label className="label" sm={8}>
            مقدمه کویز
          </Label>
          <Col sm={8}>
            <Input
              type="textarea"
              name="body"
              className="input question"
              value={props.body}
              onChange={props.onChange}
              placeholder="مقدمه کویز را اینجا بنویسید"
            />
          </Col>
        </FormGroup>
      </Form>
    </Col>
  );
};

export default CreateQuiz;
