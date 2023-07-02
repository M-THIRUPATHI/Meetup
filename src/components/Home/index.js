import {Link} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {registerButtonClicked, input} = value
      return (
        <div>
          <Header />
          <div>
            {registerButtonClicked ? (
              <h1>{`Hello ${input}`}</h1>
            ) : (
              <h1>Welcome to Meetup</h1>
            )}
            <p>Please register for the topic</p>
            <Link to="/register">
              <button type="button">Register</button>
            </Link>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)
export default Home
