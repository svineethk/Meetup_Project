import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'ARTS_AND_CULTURE',
  isRegistered: false,
  showError: false,
  changeName: () => {},
  changeTopic: () => {},
  registerName: () => {},
  updateError: () => {},
})

export default RegisterContext
