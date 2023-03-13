import React from 'react'
import { Checkbox, Container, ContainerInput, InputDivSignup, Text, Title } from './SingUpStyles'
import Header from '../../components/Header/Header'
import { InputDiv } from '../LoginScreen/LoginStyles'
import { Input } from '../../components/Input/InputStyles'
import { ButtonContinue } from '../../components/Button/ButtonStyles'

const SignUp = () => {
  return (
    <Container>
        <Header/>

        <Title>Olá, boas vindas ao Labeddit!</Title>

        <ContainerInput>
            <InputDiv>
                <Input placeholder="Apelido"></Input>
                <Input placeholder="E-mail"></Input>
                <Input placeholder="Senha"></Input>
            </InputDiv>

            <Text>Ao continuar, você concorda com o nosso <a>Contrato de Usuário </a>
            e nossa <a>Política de Privacidade</a>.
            </Text>

            <InputDivSignup>
                <Checkbox type="checkbox"></Checkbox>
                <Text>Eu concordo em receber e-mails sobre coisas legais no Labeddit.</Text>
            </InputDivSignup>
            

            <ButtonContinue>Cadastrar</ButtonContinue>
        </ContainerInput>

        
    </Container>
  )
}

export default SignUp