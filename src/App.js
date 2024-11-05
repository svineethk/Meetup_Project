import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import RegisterContext from './context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'

import './App.css'
import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.

class App extends Component {
  state = {
    name: '',
    topic: 'ARTS_AND_CULTURE',
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, isRegistered, topic, showError} = this.state

    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
