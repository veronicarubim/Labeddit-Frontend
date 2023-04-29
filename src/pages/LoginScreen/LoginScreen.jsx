import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToSignUp } from '../../routes/cordinator'
import { ButtonContinue, ButtonSignIn } from '../../components/Button/ButtonStyles'
import { Input } from '../../components/Input/InputStyles'
import { ButtonDiv, Container, Hr, Image, InputDiv, LogoDiv, Text } from './LoginStyles'
import logo from '../../assets/logoLogin.png'
import { GlobalContext } from '../../context/GlobalContext'
import axios from 'axios'
import { BASE_URL } from '../../utils/url'

const LoginScreen = () => {

  const navigate = useNavigate()
  const context = useContext(GlobalContext)

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setSenha(e.target.value)
  }

  useEffect(() => {
    if (context.isAuth) {
      goToFeed(navigate)
    }
  })

  const login = async () => {
    try {
      const body = {
        email: email,
        password: senha
      }

      const response = await axios.post(`${BASE_URL}/users/login`, body)
      window.localStorage.setItem('labeddit-token', response.data.token)
      goToFeed(navigate)
      context.setIsAuth(true)
    } catch (error) {
      console.log(error)
    }
  };

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
        <ButtonContinue onClick={login}>Continuar</ButtonContinue>
        <Hr></Hr>
        <ButtonSignIn onClick={() => {goToSignUp(navigate)}}>Crie uma conta!</ButtonSignIn>
      </ButtonDiv>
      
    </Container>
        
    
    
  )
}

export default LoginScreen