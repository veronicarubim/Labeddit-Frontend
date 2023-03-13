import React from 'react'
import { ButtonContinue, ButtonSignIn } from '../../components/Button/ButtonStyles'
import Header from '../../components/Header/Header'
import { Input } from '../../components/Input/InputStyles'
import { ButtonDiv, Container, Hr, Image, InputDiv, LogoDiv, Text } from './LoginStyles'
import logo from '../../assets/logoLogin.png'

const LoginScreen = () => {
  return (
    <Container>

      <Header/>

      <LogoDiv>
        <Image src={logo}/>
        <Text>O projeto de rede social da Labenu</Text>
      </LogoDiv>
      
      <InputDiv>
        <Input placeholder='E-mail'></Input>
        <Input placeholder='Senha'></Input>
      </InputDiv>

      <ButtonDiv>
        <ButtonContinue>Continuar</ButtonContinue>
        <Hr></Hr>
        <ButtonSignIn>Crie uma conta!</ButtonSignIn>
      </ButtonDiv>
      
    </Container>
        
    
    
  )
}

export default LoginScreen