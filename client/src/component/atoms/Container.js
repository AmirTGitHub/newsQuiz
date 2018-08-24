import React from "react";

const Container = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">{props.content}</div>
      </div>
    </div>
  );
};

export default Container;
