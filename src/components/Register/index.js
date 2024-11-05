import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  RegisterContainer,
  ContentContainer,
  RegisterImage,
  RegisterForm,
  FormHeader,
  Title,
  InputElement,
  SelectElement,
  OptionElement,
  RegisterButton,
  ErrorMsg,
} from './styledComponent'

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

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        showError,
        changeName,
        registerName,
        changeTopic,
        updateError,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <ContentContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <RegisterForm onSubmit={submitRegistration}>
                <FormHeader>Let us join</FormHeader>
                <Title htmlFor="name">NAME</Title>
                <InputElement
                  id="name"
                  value={name}
                  type="text"
                  placeholder="Your name"
                  onChange={onChangeName}
                />
                <Title htmlFor="topic">TOPICS</Title>
                <SelectElement
                  id="topic"
                  value={topic}
                  onChange={onChangeTopic}
                >
                  {topicsList.map(eachList => (
                    <OptionElement
                      value={eachList.displayText}
                      key={eachList.id}
                    >
                      {eachList.displayText}
                    </OptionElement>
                  ))}
                </SelectElement>
                <RegisterButton>Register Now</RegisterButton>
                {showError === true ? (
                  <ErrorMsg>Please enter your name</ErrorMsg>
                ) : (
                  ''
                )}
              </RegisterForm>
            </ContentContainer>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
