import React from 'react';

interface LoginProps {
  isLoggedIn: boolean;
}

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props: LoginProps) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default class LoginControl extends React.Component<any, LoginProps> {
  constructor(props: any) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  }
  render(): React.ReactNode {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div className="m-auto">
        <Greeting isLoggedIn={isLoggedIn} />
        <button
          className="p-4 border rounded mt-4 bg-yellow-200"
          onClick={() => this.handleLoginClick()}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    );
  }
}
