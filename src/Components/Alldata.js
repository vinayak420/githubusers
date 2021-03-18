import React from "react";
import ReactDOM from "react";
import {Link} from "react-router-dom"

function Alldata(props) {
  return (
    <div className = "display"> 
      <div className = "user">
        <img src = {props.avatar} />
        <div id = "info">
        <h1>{props.username}</h1>
        <p><strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link to={`/${props.username}`}><button className = "btn btn-lg btn-dark">VIEW PROFILE</button></Link>
      </div>
    </div>
       
    
    </div>
  );
}

export default Alldata;
