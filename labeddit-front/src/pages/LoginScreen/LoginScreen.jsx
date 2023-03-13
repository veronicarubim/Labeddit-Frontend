import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToSignUp } from '../../routes/cordinator'
import { ButtonContinue, ButtonSignIn } from '../../components/Button/ButtonStyles'
import { Input } from '../../components/Input/InputStyles'
import { ButtonDiv, Container, Hr, Image, InputDiv, LogoDiv, Text } from './LoginStyles'
import logo from '../../assets/logoLogin.png'

const LoginScreen = () => {

  const navigate = useNavigate()

  return (
    <Container>

      <LogoDiv>
        <Image src={logo}/>
        <Text>O projeto de rede social da Labenu</Text>
      </LogoDiv>
      
      <InputDiv>
        <Input placeholder='E-mail'></Input>
        <Input placeholder='Senha'></Input>
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