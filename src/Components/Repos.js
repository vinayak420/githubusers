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
    console.log(this.state.repos)
    return (
      <div>
        <h3> List of reps</h3>
        {this.state.repos.map((repos) => {
          return (
            <div>
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
