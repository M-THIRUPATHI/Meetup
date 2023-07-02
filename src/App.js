import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import RegisterContext from './context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {registerButtonClicked: false, activeOptionId: topicsList[0].id}

  changeOptionId = activeOptionId => {
    this.setState({activeOptionId})
  }

  render() {
    const {registerButtonClicked, activeOptionId} = this.state
    return (
      <RegisterContext.Provider
        value={{
          registerButtonClicked,
          activeOptionId,
          changeOptionId: this.changeOptionId,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
