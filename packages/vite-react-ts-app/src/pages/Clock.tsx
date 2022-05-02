import dayjs from 'dayjs';
import React, { ReactNode } from 'react';

const getCurrentTime = () => dayjs().format('YYYY-MM-DD HH:mm:ss');

class Clock extends React.Component<any, { time: string; times: number }> {
  timerId = 0;
  constructor(props: object) {
    super(props);
    this.state = { time: getCurrentTime(), times: 0 };
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  tick() {
    // State Updates May Be Asynchronous
    // Use function rather than a object

    // Bad
    // this.setState({
    //   time: getCurrentTime(),
    //   times: this.state.times + 1
    // });

    // Good
    this.setState(state => ({
      time: getCurrentTime(),
      times: state.times + 1
    }));
  }
  render(): ReactNode {
    return (
      <div className="m-auto">
        <p>Current Time: {this.state.time}</p>
        <p>Update Times: {this.state.times}</p>
      </div>
    );
  }
}

export default Clock;
