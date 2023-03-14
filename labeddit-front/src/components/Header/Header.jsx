import React from 'react'
import { Container, Image, LogOut, Button, ImageX } from './HeaderStyles'
import logo from '../../assets/logo.png'
import x from '../../assets/x.png'
import { goToFeed, goToLogin } from '../../routes/cordinator'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Container>

      {
      location.pathname === "/post" ? 
      (<Button onClick={() => {goToFeed(navigate)}}><ImageX src={x}/></Button>) : 
      (null)
      } 
      <Image src={logo}/>
      {
      location.pathname === "/signup" ? 
      (<LogOut onClick={() => {goToLogin(navigate)}}>Entrar</LogOut>) : 
      (<LogOut onClick={() => {goToLogin(navigate)}}>Sair</LogOut>)
      }
            
    </Container>
  )
}

export default Header