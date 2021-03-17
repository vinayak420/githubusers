import React from "react";
import ReactDOM from "react";
import Alldata from "./Alldata";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Result from "./Result";

class AllUsers extends ReactDOM.Component {




  render() {
    const users = this.props.data.map((data) => (
      <Link to={`/${data.login}`}>
        <Alldata key={data.id} username={data.login} avatar={data.avatar_url} />
      </Link>
    ));

 
      return (
        <div>
          <form>
            <input
              type='text'
              name='search'
              placeholder='Search for a user'
              onChange={this.handleChange}
            ></input>
            <button>Search</button>
          </form>
          <button onClick = {()=> this.props.sortData("followers")}> Sort by followers</button>
          {users}
        </div>
      );
    }
  }
// }

export default AllUsers;
