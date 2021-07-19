import React from "react";
import Box from "./componements/Box";
import './App.css';
import './styles/global.css';
import "bootstrap/dist/css/bootstrap.min.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water: "1.5",
      heart: "120",
      temperature: "-10",
      steps: "3000",
    };

    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTempChange = this.onTempChange.bind(this)
     
  }

  onHeartChange(e) {
   
    this.setState({heart: e.target.value})
    this.calculateWeather()
  }


  onStepsChange(e) {
   
    this.setState({steps: e.target.value})
    this.calculateWeather()
  }

  onTempChange(e) {
   
    this.setState({temperature: e.target.value})
    this.calculateWeather()
  }

  calculateWeather(e){
    
  }
  

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* <p>Heart: {heartMin}</p>
          <p>Temperature: {tempMin}</p>
          <p>Steps: {stepsMin}</p> */}

          {/* water */}
          <Box icon="local_drink" unit="L" color="#3A85FF" value={this.state.water} />
          {/* steps */}
          <Box icon="directions_walk" color="black" value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} onChange={this.onStepsChange} />
          {/* heart */}
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} onChange={this.onHeartChange}/>
          {/* temperature */}
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C" min={tempMin} max={tempMax} onChange={this.onTempChange} />
        </div>
      </div>
    
    );
  }
}

export default App;
