import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {
 
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      options: {      labels: props.names
      },
      series: props.hours,
    };
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="500" />
 </div>
    );
  }
}

export default Donut;