import React from 'react'
import { ButtonPost } from '../../components/Button/ButtonStyles'
import Comment from '../../components/Comment/Comment'
import Header from '../../components/Header/Header'
import { PostInput } from '../../components/Input/InputStyles'
import Post from '../../components/Post/Post'
import { Hr, CommentsDiv, Container, PostDiv } from './PostScreenStyles'

const PostScreen = () => {

  return (
    <Container>
        <Header/>
        <PostDiv>
          <PostInput placeholder='Escreva seu comentário...'></PostInput>
          <ButtonPost>Publicar</ButtonPost>
        </PostDiv>
        
        <Hr></Hr>

        <CommentsDiv>
          <Comment/>
        </CommentsDiv>
        
    </Container>
  )
}

export default PostScreen