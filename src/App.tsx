import React, { FunctionComponent } from 'react';

import logo from './logo.svg';
import './App.css';

type ButtonProps = {
  href: string,
  label: string,
}

export const Button: FunctionComponent<ButtonProps> = props => {
  return (
    <div className="Button">
      <a href={props.href}>{props.label}</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-notice">Nothing here just yet!</h3>
        <Button href="https://github.com/mitten-lang/" label="View on GitHub" />
      </header>
      <p className="App-copyright">Copyright &copy; The Mitten Programming Language 2020. All Rights Reserved.</p>
    </div>
  );
}

export default App;
