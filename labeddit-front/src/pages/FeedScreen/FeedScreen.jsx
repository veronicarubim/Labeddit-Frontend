import React from 'react'
import { ButtonPost } from '../../components/Button/ButtonStyles'
import Header from '../../components/Header/Header'
import { PostInput } from '../../components/Input/InputStyles'
import  Post  from '../../components/Post/Post'
import { Hr } from '../LoginScreen/LoginStyles'
import { Container, InnerContainer, PostDiv, Published } from './FeedScreenStyles'

const FeedScreen = () => {
  return (
    <Container>
        <Header></Header>

        <InnerContainer>
          <PostInput placeholder="Escreva seu post..."></PostInput>
          <ButtonPost>Publicar</ButtonPost>
          <Hr></Hr>
        </InnerContainer>

        <Published>
          <Post/>
        </Published>
        

    </Container>
  )
}

export default FeedScreen