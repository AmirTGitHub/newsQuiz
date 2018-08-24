import React from "react";

const Answer = props => {
  return (
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label className="label">{props.lable}</label>
        <div class="input-group-text">
          <input type="checkbox" name={props.checked} />
        </div>
      </div>
      <input
        type="text"
        class="form-control input"
        name={props.name}
        value={props.answer}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Answer;
