import React from "react";
import Input from "../atoms/Input";
import Answer from "../atoms/Answer";
import FileUpload from "../atoms/FileUpload";

const QAndA = props => {
  return (
    <div className="col-md-8 m-auto question">
      <Input
        label="سوال را اینجا بنویسید"
        type="text"
        name="question1"
        value={props.question1}
        onChange={props.onChange}
      />
      <Answer
        label="گزینه ها"
        placeholder="گزینه‌ها را اینجا بنویسید و اگر درست است تیک بزنید"
        name="answer1"
        value={props.answer1}
        onChange={props.onChange}
      />
      <Answer
        label="گزینه ها"
        placeholder="گزینه‌ها را اینجا بنویسید و اگر درست است تیک بزنید"
        name="answer2"
        value={props.answer2}
        onChange={props.onChange}
      />
      <Answer
        label="گزینه ها"
        placeholder="گزینه‌ها را اینجا بنویسید و اگر درست است تیک بزنید"
        name="answer3"
        value={props.answer3}
        onChange={props.onChange}
      />
      <Answer
        label="گزینه ها"
        placeholder="گزینه‌ها را اینجا بنویسید و اگر درست است تیک بزنید"
        name="answer4"
        value={props.answer4}
        onChange={props.onChange}
      />
      <FileUpload />
    </div>
  );
};

export default QAndA;
