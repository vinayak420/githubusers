import { React, Component } from "react";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {}

  render() {
    console.log(this.props.data);

    return <h1>{this.props.data}</h1>;
  }
}

export default Result;
