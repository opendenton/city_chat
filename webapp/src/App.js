import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="assets/images/logo@2x.png"
            className="App-logo"
            alt="logo"
          />
        </header>
        <p className="App-intro">
          Welcome! Click on the chat icon to start asking questions!
          <br />
          <br />
          <br />
          Oh, you can only ask one question (for now.)
        </p>
      </div>
    )
  }
}

export default App
