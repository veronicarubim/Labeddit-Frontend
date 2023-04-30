import React from 'react'
import { CommentContainer, Title, Content, LowerBar, LikeDiv, Button, Icon, Text} from './CommentStyles'
import Like from '../../assets/like.png'
import Dislike from '../../assets/dislike.png'
import { BASE_URL } from '../../utils/url'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Comment = (props) => {

    const {comment, fetchComments} = props
    const params = useParams();

  const likeComment = async (commentId) => {
    try {
      let body = {
        like: true,
      };
      await axios.put(`${BASE_URL}/posts/comments/${commentId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  const dislikeComment = async (commentId) => {
    try {
      let body = {
        like: false,
      };
      await axios.put(`${BASE_URL}/posts/comments/${commentId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };


  return (
    <CommentContainer>
        <Title>Enviado por {comment.creator.name}</Title>
        <Content>{comment.content}</Content>
        <LowerBar>
            <LikeDiv>
                <Button onClick={() => likeComment(comment.id)}>
                    <Icon src={Like}></Icon>
                </Button>
                <Text>{comment.likes}</Text>
                <Button onClick={() => dislikeComment(comment.id)}>
                    <Icon src={Dislike}></Icon>
                </Button>
                <Text>{comment.dislikes}</Text>
            </LikeDiv>
        </LowerBar>
    </CommentContainer>
  )
}

export default Comment