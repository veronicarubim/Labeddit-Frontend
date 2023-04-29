import React, { useState } from 'react'
import { Checkbox, Container, ContainerInput, InputDivSignup, Text, Title } from './SingUpStyles'
import Header from '../../components/Header/Header'
import { InputDiv } from '../LoginScreen/LoginStyles'
import { Input } from '../../components/Input/InputStyles'
import { ButtonContinue } from '../../components/Button/ButtonStyles'
import { goToFeed } from '../../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/url'
import axios from 'axios'

const SignUp = () => {

  const [apelido, setApelido] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const handleNickname = (e) => {
    setApelido(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setSenha(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      name: apelido,
      email: email,
      password: senha
    }

    if(body.apelido.length <= 1) {
      alert("Caixas vazias!")
    } else {
      setUsers([...users, body])
      setApelido('')
      setEmail('')
      setSenha('')
    }
    
  }

  const signUp = async () => {
    try {
      handleSubmit();
      const response = await axios.post(`${BASE_URL}/users/signup`, handleSubmit());
      window.localStorage.setItem("labeddit-token", response.data.token);
      goToFeed(navigate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
        <Header/>

        <Title>Olá, boas vindas ao Labeddit!</Title>

        <ContainerInput>
            <InputDiv>
                <Input type="text" placeholder="Apelido" value={apelido} onChange={handleNickname}></Input>
                <Input type="email" placeholder="E-mail" value={email} onChange={handleEmail}></Input>
                <Input type="password" placeholder="Senha" value={senha} onChange={handlePassword}></Input>
            </InputDiv>

            <Text>Ao continuar, você concorda com o nosso <a>Contrato de Usuário </a>
            e nossa <a>Política de Privacidade</a>.
            </Text>

            <InputDivSignup>
                <Checkbox type="checkbox"></Checkbox>
                <Text>Eu concordo em receber e-mails sobre coisas legais no Labeddit.</Text>
            </InputDivSignup>
            

            <ButtonContinue type="submit" onClick={() => signUp()}>Cadastrar</ButtonContinue>
        </ContainerInput>

        
    </Container>
  )
}

export default SignUp