import React from 'react'
import { Container, Image, LogOut, Button } from './HeaderStyles'
import logo from '../../assets/logo.png'
import x from '../../assets/x.png'

const Header = () => {
  return (
    <Container>
      <Button>
        <Image src={x}/>
      </Button> 
      <Image src={logo}/>
      <LogOut>Logout</LogOut>
    </Container>
  )
}

export default Header