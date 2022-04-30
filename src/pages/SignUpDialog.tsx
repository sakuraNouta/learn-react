import * as React from 'react';

function FancyBorder(props: React.PropsWithChildren<{ color: string }>) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(
  props: React.PropsWithChildren<{ title: string; message: string }>
) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

export default class signUpDialog extends React.Component<
  any,
  { login: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = { login: '' };
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ login: e.target.value });
  }
  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}`);
  }
  render(): React.ReactNode {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login} onChange={e => this.handleChange(e)} />
        <button onClick={() => this.handleSignUp()}>Sign Me Up!</button>
      </Dialog>
    );
  }
}
