import "./App.css";
import Navbar from "./Components/Navbar";
import AllUsers from "./Components/AllUsers";
import User from "./Components/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return(

        <div className='App'>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={AllUsers} />
              <Route path='/:username' exact component={User} />
            </Switch>
          </Router>
        </div>
  
  )
  }

export default App;
