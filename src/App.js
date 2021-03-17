import "./App.css";
import ReactDOM from "react"
import Navbar from "./Components/Navbar";
import AllUsers from "./Components/AllUsers";
import User from "./Components/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends ReactDOM.Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      allData: [],
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

    sortData =(param)=>{
    this.setState({
      allData: data.sort((a,b) =>  a[param] - b[param])
      })
      console.log(this.state)
    }

  render(){
        if (this.state.isLoading) {
        return <h1>Loading...</h1>;
      } else {
      return (
        <div className='App'>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact render={(props) => (<AllUsers {...props} data={this.state.allData} sortData = {this.sortData} />)} />
              <Route path='/:username' exact component={User} />
            </Switch>
          </Router>
        </div>
      );
    }
  }
}
export default App;
