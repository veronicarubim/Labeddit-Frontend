import React from 'react'
import { CommentDiv, Icon, LikeDiv, LowerBar, PostContainer, Title, Content, Text, Button } from './PostStyles'
import Like from '../../assets/like.png'
import Dislike from '../../assets/dislike.png'
import Comment from '../../assets/comment.png'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../routes/cordinator'
import { BASE_URL } from '../../utils/url'
import axios from 'axios'

const Post = (props) => {

    const navigate = useNavigate()
    const { post, findPosts } = props;
    const like = async (postId) => {
    try {
      let body = {
        like: true,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      findPosts();
    } catch (error) {
      console.log(error);
    }
  };
  const dislike = async (postId) => {
    try {
      let body = {
        like: false,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      findPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <PostContainer>
        <Title>Enviado por {post.creator.name}</Title>
        <Content>{post.content}</Content>
        <LowerBar>
            <LikeDiv>
                <Button>
                    <Icon onClick={() => like(post.id)} src={Like}></Icon>
                </Button>
                <Text>{post.likes}</Text>
                <Button>
                    <Icon onClick={() => dislike(post.id)} src={Dislike}></Icon>
                </Button>
                <Text>{post.dislikes}</Text>
                
            </LikeDiv>
            <CommentDiv>
                <Button onClick={() => {goToPost(navigate, post.id)}}>
                <Icon src={Comment}></Icon>
                </Button>
               
            </CommentDiv>
        </LowerBar>
    </PostContainer>
  )
}

export default Post