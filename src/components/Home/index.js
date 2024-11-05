import {Link} from 'react-router-dom'

import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  HomeContainer,
  HomeHeading,
  HomeParagraph,
  RegisterButton,
  HomeParagraphs,
  ImageElement,
  HomeHeadings,
} from './styledComponent'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegistered, name, topic} = value
      return (
        <div>
          <Header />
          {isRegistered === false ? (
            <HomeContainer>
              <HomeHeading>Welcome to Meetup</HomeHeading>
              <HomeParagraph>Please register for the topic</HomeParagraph>
              <Link to="/register">
                <RegisterButton>Register</RegisterButton>
              </Link>
              <ImageElement
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          ) : (
            <HomeContainer>
              <HomeHeadings>Hello {name}</HomeHeadings>
              <HomeParagraphs>Welcome to {topic}</HomeParagraphs>
              <ImageElement
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          )}
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
