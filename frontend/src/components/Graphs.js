import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {
 
  constructor(props) {
    super(props);
    console.log(props)
    // let hours = []
    // let names = []
    // for (let i = 0; i < props.params.length; i++){
    //     hours.push(props.params[i].sum);
    //     names.push(props.params[i].first_name+" "+props.params[i].last_name);

    // }
   
    // console.log(names)
    // console.log(hours)
   

    this.state = {
      options: {},
      series: props.hours,
      labels: props.names
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;