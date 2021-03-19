import React from "react";
import ReactDOM from "react";
import Repos from "./Repos";

class User extends ReactDOM.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data: data,
          isLoading: false,
        })
      );
  }

  render() {
    if(this.state.isLoading){
      return <h1>Loading...</h1>
    }else{
    return (
      <div className = "profile">
        <img src={this.state.data.avatar_url} alt=""></img>
        <div className = "info">
          <div className = "heading">
          <h1>
            {this.state.data.login} ({this.state.data.name})
          </h1>
          <p>Git hub link: {this.state.data.html_url}</p>
          </div>
          <div className = "follow">
          <h3>Followers: {this.state.data.followers}</h3>
          <h3>Following: {this.state.data.following}</h3>
          </div>
        </div>
        {console.log(this.state.data)}
        <Repos url={this.state.data.repos_url} />
      </div>
    );
  }
}
}

export default User;
