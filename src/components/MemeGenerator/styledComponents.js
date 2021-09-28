// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-around;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`

export const FormContainer = styled.form`
  width: 50%;
`
export const Label = styled.label`
  color: #5a7184;
  margin-bottom: 10px;
  font-size: 16spx;
`

export const EnterUrl = styled.input`
  width: 300px;
  padding: 10px;
  height: 35px;
  border-radius: 4px;
  border: 1px solid #7e858e;
  margin-top: 8px;
  margin-bottom: 15px;
  outline: none;
`
export const SelectFont = styled.select`
  width: 300px;
  height: 35px;
  outline: none;
`
export const Heading = styled.h1`
  color: #35469c;
`

export const ImageContainer = styled.div`
  background-image: url('${props => props.src}');
  background-size: cover;
  height: 250px;
  width: 350px;
  padding: 10px;
`

export const Text = styled.p`
  font-size: ${props => props.font};
  color: white;
  margin-bottom: 30px;
  top: ${props => (props.top ? '10%' : null)};
  bottom: ${props => (props.top ? null : '10%')};
`
export const Context = styled.div`
  display: flex;
  height: 250px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`
export const Button = styled.button`
  margin-top: 15px;
  border: 0;
  background-color: #0b69ff;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  font-size: 14px;
`
