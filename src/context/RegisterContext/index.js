import React from 'react'

const RegisterContext = React.createContext({
  registerButtonClicked: false,
  input: '',
  activeOptionId: '',
  changeOptionId: () => {},
})
export default RegisterContext
