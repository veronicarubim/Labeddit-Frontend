import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToSignUp } from '../../routes/cordinator'
import { ButtonContinue, ButtonSignIn } from '../../components/Button/ButtonStyles'
import { Input } from '../../components/Input/InputStyles'
import { ButtonDiv, Container, Hr, Image, InputDiv, LogoDiv, Text } from './LoginStyles'
import logo from '../../assets/logoLogin.png'

const LoginScreen = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setSenha(e.target.value)
  }

  return (
    <Container>

      <LogoDiv>
        <Image src={logo}/>
        <Text>O projeto de rede social da Labenu</Text>
      </LogoDiv>
      
      <InputDiv>
        <Input type="email" placeholder='E-mail' value={email} onChange={handleEmail}></Input>
        <Input type="password" placeholder='Senha' value={senha} onChange={handlePassword}></Input>
      </InputDiv>

      <ButtonDiv>
        <ButtonContinue onClick={() => {goToFeed(navigate)}}>Continuar</ButtonContinue>
        <Hr></Hr>
        <ButtonSignIn onClick={() => {goToSignUp(navigate)}}>Crie uma conta!</ButtonSignIn>
      </ButtonDiv>
      
    </Container>
        
    
    
  )
}

export default LoginScreen