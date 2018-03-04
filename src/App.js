import React, { Component } from 'react'
import { Widget, addResponseMessage } from 'react-chat-widget'
import axios from 'axios'

import { findCouncilPerson, findAddressCandidates } from './utils'
import './App.css'

// TODO: improve this for better fuzzy searching
const cityCouncilChecker = RegExp('(c|C)ity (c|C)oun(cil|sel)')
const affirmativeChecker = RegExp('(y|Y)es')
const negativeChecker = RegExp('(n|N)o')

class App extends Component {
  state = {
    step: 0,
    latLon: null,
    address: null,
    councilPerson: null
  }

  getCouncilPerson(address) {
    axios
      .get(findAddressCandidates(address))
      .then(function(response) {
        let location = response.data.candidates[0].location
        let { x, y } = location

        return axios
          .get(findCouncilPerson(x, y))
          .then(function(result) {
            addResponseMessage(
              'Your city councilperson is: ' +
                // Look how much fun!!
                result.data.features[0].attributes.Name
            )
          })
          .catch(function(err) {
            console.log('Uh oh: ', err)
          })
      })
      .catch(function(error) {
        console.log('Something bad: ', error)
      })
  }

  handleNewUserMessage = msg => {
    // For debugging
    // return this.getCouncilPerson(msg)

    if (cityCouncilChecker.test(msg)) {
      this.setState({ step: 1 })
      return addResponseMessage(
        `It looks like you seek information regarding city council, would
          you like to know who your city councilperson is?`
      )
    }

    if (affirmativeChecker.test(msg) && this.state.step === 1) {
      this.setState({ step: 2 })
      return addResponseMessage('Do you know your district?')
    }

    if (this.state.step === 2 && negativeChecker.test(msg)) {
      this.setState({ step: 3 })
      return addResponseMessage(
        `That's ok, I can find out for you. What's your address?`
      )
    }

    if (this.state.step === 3) {
      this.setState({ step: 4 })

      return this.getCouncilPerson(msg)
    }

    if (this.state.step === 2 && affirmativeChecker.test(msg)) {
      this.setState({ step: 3 })
      return addResponseMessage('Handle them saying yes')
    }

    // Some simple base cases
    if (msg === 'hey') {
      return addResponseMessage('Hey :)')
    } else {
      return (
        this.state.step < 3 &&
        addResponseMessage(`Sorry, I'm not sure I follow.. how can I help?`)
      )
    }
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
