import React from 'react';

class Clock extends React.Component{
  constructor() {
    super();
    this.state = {
      time: new Date()
    }

    this.render = this.render.bind(this)
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.handle = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
    this.handle = 0;
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    return  (
      <>
        <h1>Clock</h1>
        <div id="clock-container">
          <h2><span>Time: </span><span>{this.state.time.toTimeString().split(" ")[0]} PDT</span></h2>
          <h2><span>Date: </span><span>{this.state.time.toDateString()}</span></h2>
        </div>
      </>
    )
  }
}

export default Clock;