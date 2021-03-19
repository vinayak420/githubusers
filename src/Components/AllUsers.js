import {React, Component} from "react";
import Alldata from "./Alldata";

// import Result from "./Result";

class AllUsers extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      allData: [],
      sortfunction: "not running"
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

  //  test = [
  //   {
  //   name:"Jim",
  //   age:"21",
  //   sales:"1900"
  //   },
  //   {
  //     name:"Dwight",
  //     age:"22",
  //     sales:"1700"
  //   },
  //   {
  //     name:"Stanley",
  //     age:"31",
  //     sales:"1800"
  //   },
  //   {
  //     name:"Phyllis",
  //     age:"26",
  //     sales:"160"
  //   }
  // ]

    // sortData =()=>{
    //   this.test.sort((a,b)=> {
    //     let nameA = a.name.toUpperCase();
    //     let nameB = b.name.toUpperCase();
    //     console.log(nameA, nameB)
    //     if(nameA>nameB){
    //       return 1;
    //     }
    //     if(nameB<nameA){
    //       return -1;
    //     }
    //     return 0;
    //   });
    //   console.log(this.test)
    // }

    sort=()=>{
      this.setState({isLoading:true},()=> {
        console.log(this.state)
        this.setState({
          allData: this.state.allData.sort((a,b)=> parseFloat(a.id) - parseFloat(b.id) ),
          isLoading: false,
        })
      })
      console.log(this.state)
    }

  render() {
    const users = this.state.allData.map((data) => (
        <Alldata key={data.id} username={data.login} avatar={data.avatar_url} />
    ));
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <div className = "filters">
          <button className = "btn btn-lg btn-secondary" onClick = {this.sort}> Sort by least relavent</button>
          <button className = "btn btn-lg btn-secondary" onClick = {this.sortAge}> Sort by Repositories</button>
          <button className = "btn btn-lg btn-secondary"> Open for work</button>
          </div>
          {users}
        </div>
      );
    }
  }
}

export default AllUsers

