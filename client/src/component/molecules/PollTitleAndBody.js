import React from "react";
import { Container, Row, Col } from "reactstrap";
import TextArea from "../atoms/TextArea";

const PollTitleAndBody = props => {
  return (
    <Container>
      <Row>
        <div className="col-md-8 m-auto">
          <TextArea
            label="عنوان امتحان"
            name="pollTitle"
            value={props.pollTitle}
            onChange={props.onChange}
            placeholder="عنوان امتحان را اینجا بنویسید"
          />

          <TextArea
            label="اطلاعات بالای امتحان"
            name="pollBody"
            value={props.Body}
            onChange={props.onChange}
            placeholder="توضیحات امتحان را اینجا ینویسید"
          />
        </div>
      </Row>
    </Container>
  );
};

export default PollTitleAndBody;
