import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "./Button";
import Card from "./Card";

class App extends React.Component {
  constructor() {
      super();
      this.state ={
        name:"",
        capital:"",
        flag:"",
        population:"",
        region:"",
      }
  }
      componentDidMount(){
        // fetch("https://restcountries.eu/rest/v2/name/france")
				// .then((res) => res.json())
				// .then((data) => {
				// 	this.setState({
        //     name:data[0].name,
        //     capital:data[0].capital,
        //     region:data[0].region,
        //     population:data[0].population,
        //     flag:data[0].flag,
				// 	});
        // });
        fetch("http://localhost:8000/France")
        .then((res) => res.json())
        .then((data) =>{
          this.setState({
            name:data.data[0].name,
            capital:data.data[0].capital,
            region:data.data[0].region,
            population:data.data[0].population,
            flag:data.data[0].flag,
          })
        })
      }

      getCountry =(country) => {
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((res) => res.json ())
        .then((data)=> {
          this.setState({
            name:data[0].name,
            capital:data[0].capital,
            region:data[0].region,
            population:data[0].population,
            flag:data[0].flag,
          })
        })
      };

    render(){
      
      return ( 
        <div>
          <Button country={() => this.getCountry("france")}>France</Button>
          <Button country={() => this.getCountry("brazil")}>Brazil</Button>
          <Button country={() => this.getCountry("croatia")}>Croatia</Button>
          <Card name={this.state.name} capital={this.state.capital} region={this.state.region} population={this.state.population} flag={this.state.flag} alt="flag" />
        </div>
      );
  }
}
export default App;
