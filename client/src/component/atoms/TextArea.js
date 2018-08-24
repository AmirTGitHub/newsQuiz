import React from "react";

const TextArea = props => {
  return (
    <div className="form-group">
      <label className="label">{props.label}</label>
      <textarea
        className="input form-control "
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        wrap="hard"
        rows="8"
      />
    </div>
  );
};

export default TextArea;
