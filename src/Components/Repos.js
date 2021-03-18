import React from "react"
import ReactDOM from "react"

class Repos extends ReactDOM.Component {
  constructor() {
    super()
    this.state = {
      repos: [],
    }
  }
  componentDidMount() {
    console.log(this.props.url)
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          repos: data,
        })
      )
  }

  render() {
    console.log(this.state)
    return (
      <div className = "sect">
        <h1> List of Repositories</h1>
        {this.state.repos.map((repos) => {
          return (
            <div className = "repos">
              <h3>{repos.name}</h3>
              <p>Repository Link: {repos.html_url} </p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Repos
