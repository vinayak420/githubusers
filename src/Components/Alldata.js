import React from "react";
import ReactDOM from "react";

function Alldata(props) {
  const handleClick = () => {
    alert("you clicked " + props.username);
  };

  return (
    <div>
      <h1>{props.username}</h1>
      <img src={props.avatar} onClick={handleClick} />
    </div>
  );
}

export default Alldata;
