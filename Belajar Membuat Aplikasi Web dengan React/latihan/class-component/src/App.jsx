import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('Component created!');
  }
 
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }

}

export default App
