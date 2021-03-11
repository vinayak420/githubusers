import React from "react";
import ReactDOM from "react";

function Alldata(props) {
  return (
    <div>
      <h1>{props.username}</h1>
      <img src={props.avatar} />
    </div>
  );
}

export default Alldata;
