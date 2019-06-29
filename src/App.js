import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
          {
            label: 'Videos Made',
            backgroundColor: 'rgba(255, 0, 255, 0.75)',
            data: [4, 5, 1, 10, 32, 2, 12]
          },
          {
            label: 'Subscriptions',
            backgroundColor: 'rgba(0, 255, 0, 0.75)',
            data: [14, 15, 21, 0, 12, 24, 32]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div
        style={{
          position: 'relative',
          width: 600,
          height: 550
        }}
      >
        <h3>Chart Samples</h3>
        <Line options={{ responsive: true }} data={this.state.data} />
      </div>
    );
  }
}

export default App;
