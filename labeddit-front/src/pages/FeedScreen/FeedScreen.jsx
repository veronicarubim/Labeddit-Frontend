import React, { useState } from 'react'
import { ButtonPost } from '../../components/Button/ButtonStyles'
import Header from '../../components/Header/Header'
import { PostInput } from '../../components/Input/InputStyles'
import  Post  from '../../components/Post/Post'
import { Hr } from '../LoginScreen/LoginStyles'
import { Container, InnerContainer, Published } from './FeedScreenStyles'

const FeedScreen = () => {

  const [posts, setPosts] = useState([])
  const [content, setContent] = useState('')

  const handleContent = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
      content: content
    }
      setPosts([newPost,...posts])
      setContent('')
  }

  return (
    <Container>
        <Header></Header>

        <InnerContainer>
          <PostInput placeholder="Escreva seu post..." value={content} onChange={handleContent}></PostInput>
          <ButtonPost onClick={handleSubmit}>Publicar</ButtonPost>
          <Hr></Hr>
        </InnerContainer>

        <Published>
          {posts.map((post) => <Post post={post}/>)}
        </Published>

    </Container>
  )
}

export default FeedScreen