import React, { useEffect, useState } from 'react'
import { ButtonPost } from '../../components/Button/ButtonStyles'
import Comment from '../../components/Comment/Comment'
import Header from '../../components/Header/Header'
import { PostInput } from '../../components/Input/InputStyles'
import { Hr, CommentsDiv, Container, PostDiv } from './PostScreenStyles'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/url'
import axios from 'axios'

const PostScreen = () => {

  const [content, setContent] = useState("");
  const [comments, setComments] = useState();

  const params = useParams();

  useEffect(() => {
    fetchComments()
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/posts/comments/${params.id}`, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async () => {
    try {
      let body = {
        content,
      };
      await axios.post(`${BASE_URL}/posts/comments/${params.id}`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      fetchComments();
      setContent("");
      console.log(comments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
        <Header/>
        <PostDiv>
          <PostInput value={content} 
          onChange={(e) => setContent(e.target.value)}
          placeholder='Escreva seu comentário...'></PostInput>
          <ButtonPost type="submit" onClick={() => createComment(params.id)}>Publicar</ButtonPost>
        </PostDiv>
        
        <Hr></Hr>

        <CommentsDiv>
        {comments && comments
        .map((comment) => {
              return <Comment key={comment.id} comment={comment} fetchComments={fetchComments()}/>;
            })}
        </CommentsDiv>
        
    </Container>
  )
}

export default PostScreen