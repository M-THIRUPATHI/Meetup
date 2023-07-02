import {Component} from 'react'
import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'

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

class Register extends Component {
  state = {
    showErrMsg: false,
    input: '',
  }

  onBlurInput = event => {
    this.setState({input: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {input} = this.state
    if (input === '') {
      this.setState({showErrMsg: true})
    } else {
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {showErrMsg, input} = this.state
          const {activeOptionId, changeOptionId} = value
          const onchangeOption = event => {
            changeOptionId((activeOptionId: event.target.value))
          }
          return (
            <div>
              <Header />
              <div>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                    alt="website register"
                  />
                </div>
                <div>
                  <h1>Let us join</h1>
                  <form onSubmit={this.onSubmitForm}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      onChange={this.onBlurInput}
                      value={input}
                    />
                    <label htmlFor="topics">TOPICS</label>
                    <select
                      value={activeOptionId}
                      onChange={onchangeOption}
                      id="topics"
                    >
                      {topicsList.map(eachTopic => (
                        <option key={eachTopic.id} value={eachTopic.id}>
                          {eachTopic.displayText}
                        </option>
                      ))}
                    </select>
                    <button type="submit">Register Now</button>
                    {showErrMsg && <p>Please enter your name</p>}
                  </form>
                </div>
              </div>
            </div>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}
export default Register
