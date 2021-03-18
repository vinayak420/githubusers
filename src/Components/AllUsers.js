import {React, Component} from "react";
import Alldata from "./Alldata";

// import Result from "./Result";

class AllUsers extends Component {

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
   test = [
    {
    name:"Jim",
    age:"21",
    sales:"1900"
    },
    {
      name:"Dwight",
      age:"22",
      sales:"1700"
    },
    {
      name:"Stanley",
      age:"31",
      sales:"1800"
    },
    {
      name:"Phyllis",
      age:"26",
      sales:"160"
    }
  ]

    sortData =()=>{
      test.sort((a,b)=> a.age-b.age);
      console.log(test)
    }




  render() {
    this.sortData();
    const users = this.state.allData.map((data) => (
        <Alldata key={data.id} username={data.login} avatar={data.avatar_url} />
    ));

    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <div className = "filters">
          <button className = "btn btn-lg btn-secondary"> Sort by followers</button>
          <button className = "btn btn-lg btn-secondary"> Sort by Repositories</button>
          <button className = "btn btn-lg btn-secondary"> Open for work</button>
          </div>
          {users}
        </div>
      );
    }
  }
}

export default AllUsers

