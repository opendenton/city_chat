import React, { Component } from 'react'
import { Widget, addResponseMessage } from 'react-chat-widget'
import './App.css'

class App extends Component {
  handleNewUserMessage = msg => {
    addResponseMessage('Ok!')
  }

  render() {
    return (
      <div className="App">
        <Widget
          title="Hello"
          subtitle="Welcome to City Chat"
          senderPlaceHolder="Ask a question..."
          showCloseButton={true}
          handleNewUserMessage={this.handleNewUserMessage}
        />
      </div>
    )
  }
}

export default App
