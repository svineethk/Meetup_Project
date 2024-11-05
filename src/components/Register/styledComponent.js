import styled from 'styled-components'

export const RegisterContainer = styled.div`
  height: 87vh;
  width: 50vw;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
`

export const Header = styled.h1`
  font-family: Roboto;
`
export const ContentContainer = styled.div`
  height: 550px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const RegisterImage = styled.img`
  height: 400px;
  width: 50%;
`
export const RegisterForm = styled.form`
  height: 400px;
  width: 50%;
`
export const FormHeader = styled.h1`
  font-family: Roboto;
  color: #354156;
  margin-bottom: 30px;
`
export const Title = styled.label`
  display: block;
  font-family: Roboto;
  color: #7b8794;
  font-weight: 600;
  margin-bottom: 20px;
`
export const InputElement = styled.input`
  height: 35px;
  width: 300px;
  padding: 8px;
  margin-left: 6px;
  margin-bottom: 6px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  margin-bottom: 20px;
`
export const SelectElement = styled.select`
  height: 35px;
  width: 300px;
  padding: 5px;
  margin-left: 6px;
  margin-bottom: 6px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  margin-bottom: 20px;
`
export const OptionElement = styled.option`
  font-family: Roboto;
  color: #334155;
`
export const RegisterButton = styled.button`
  display: block;
  margin-top: 24px;
  height: 40px;
  width: 120px;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 8px;
  border-color: transparent;
  font-weight: 700;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-family: Roboto;
  color: #ff0b37;
  margin: 0px;
  padding: 0px;
`
