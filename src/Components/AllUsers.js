import React from "react";
import ReactDOM from "react";
import Alldata from "./Alldata";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Result from "./Result";

class AllUsers extends ReactDOM.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      allData: [],
      search: "",
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://api.github.com/users")
      .then((resposnse) => resposnse.json())
      .then((data) =>
        this.setState({
          allData: data,
          isLoading: false,
        })
      );
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    const users = this.state.allData.map((data) => (
      <Link to={`/${data.login}`}>
        <Alldata key={data.id} username={data.login} avatar={data.avatar_url} />
      </Link>
    ));

    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    } else {
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
          {/* <Result data={this.state.search} /> */}
          {users}
        </div>
      );
    }
  }
}

export default AllUsers;
