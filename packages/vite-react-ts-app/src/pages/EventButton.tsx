import React from 'react';

class Toggle extends React.Component<any, { isToggleOn: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { isToggleOn: false };
  }
  handleClick(prevIsToggleOn: boolean, event: React.MouseEvent) {
    console.log(
      'Toggle -> handleClick -> prevIsToggleOn, event',
      prevIsToggleOn,
      event
    );
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render(): React.ReactNode {
    return (
      <button
        className="h-20 bg-sky-400 p-4 border rounded m-auto"
        onClick={e => this.handleClick(this.state.isToggleOn, e)}
      >
        Current Button: {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;
