import React from "react";
import ReactDOM from "react";
import Alldata from "./Alldata";
import Result from "./Result";

class SearchComponent extends ReactDOM.Component {
  constructor() {
    super();
    this.state = {
      allData: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then((resposnse) => resposnse.json())
      .then((data) =>
        this.setState({
          allData: data,
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
      <Alldata username={data.login} avatar={data.avatar_url} />
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
        <Result data={this.state.search} />
        {users}
      </div>
    );
  }
}

export default SearchComponent;
