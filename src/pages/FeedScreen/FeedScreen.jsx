import React, { useContext, useEffect, useState } from 'react'
import { ButtonPost } from '../../components/Button/ButtonStyles'
import Header from '../../components/Header/Header'
import { PostInput } from '../../components/Input/InputStyles'
import  Post  from '../../components/Post/Post'
import { Hr } from '../LoginScreen/LoginStyles'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, InnerContainer, Published } from './FeedScreenStyles'
import { GlobalContext } from '../../context/GlobalContext'
import { goToLogin } from '../../routes/cordinator'
import { BASE_URL } from '../../utils/url'

const FeedScreen = () => {

  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const [content, setContent] = useState("");
  const { posts, setPosts } = context;

  useEffect(() => {
    findPosts();
  });

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token");
    if (!token) {
      goToLogin(navigate);
    }
  });

  const findPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async () => {
    try {
      let body = {
        content,
      };
      await axios.post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      findPosts();
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
        <Header></Header>

        <InnerContainer>
          <PostInput value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Escreva seu post..."></PostInput>
          <ButtonPost onClick={() => createPost()}>Publicar</ButtonPost>
          <Hr></Hr>
        </InnerContainer>

        <Published>
          {posts.map((post) => <Post key={post.id} post={post} findPosts={findPosts}/>)}
        </Published>

    </Container>
  )
}

export default FeedScreen