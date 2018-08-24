import React, { Component, Fragment } from "react";
import PollTitleAndBody from "../molecules/PollTitleAndBody";
import QAndA from "../molecules/QAndA";
import Button from "../atoms/Button";

export default class CreatePoll extends Component {
  state = {
    pollTitle: "",
    pollBody: "",
    question1: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { body, answers } = this.props;
    const { pollBody, pollTitle, question1 } = this.state;
    return (
      <Fragment>
        <div className="container ">
          <div className="row">
            <PollTitleAndBody
              pollTitle={pollTitle}
              pollBody={pollBody}
              onChange={this.onChange}
            />
            <QAndA question1={question1} onChange={this.onChange} />
            <Button type="add question and answer">
              {" "}
              add question and answer
            </Button>
          </div>
        </div>
      </Fragment>

      // <Form>
      //   <FormGroup>
      //     <Label className="label" sm={8}>
      //       سوال را اینجا بنویسید
      //     </Label>
      //     <Col sm={8}>
      //       <Input
      //         type="textarea"
      //         wrap="hard"
      //         name="question"
      //         value={body}
      //         onChange={this.props.onChange}
      //         placeholder="متن سوال را اینجا بنویسید"
      //       />
      //     </Col>
      //   </FormGroup>
      //   <Button
      //     color="success"
      //     onClick={this.props.AddAnswer}
      //     // disabled={answers.length === 4 ? true : false}
      //   >
      //     addAnswer
      //   </Button>
      //   {answers.length > 0
      //     ? answers.map((item, index) => {
      //         return (
      //           <Answer
      //             key={index}
      //             index={index}
      //             onChange={this.props.onChange}
      //             correctAnswer={this.props.correctAnswer}
      //           />
      //         );
      //       })
      //     : null}

      //   <Button color="warning" onClick={this.props.save}>
      //     save
      //   </Button>
      // </Form>
    );
  }
}
