import React from 'react'
import { CommentDiv, Icon, LikeDiv, LowerBar, PostContainer, Title, Content, Text, Button } from './PostStyles'
import Like from '../../assets/like.png'
import Dislike from '../../assets/dislike.png'
import Comment from '../../assets/comment.png'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../routes/cordinator'

const Post = ({post}) => {

    const navigate = useNavigate()

  return (
    
    <PostContainer>
        <Title>Enviado por </Title>
        <Content>{post.content}</Content>
        <LowerBar>
            <LikeDiv>
                <Button>
                    <Icon src={Like}></Icon>
                </Button>
                <Text>456</Text>
                <Button>
                    <Icon src={Dislike}></Icon>
                </Button>
                
            </LikeDiv>
            <CommentDiv>
                <Button onClick={() => {goToPost(navigate)}}>
                <Icon src={Comment}></Icon>
                </Button>
                <Text>23</Text>
            </CommentDiv>
            <Button>Delete</Button>
        </LowerBar>
    </PostContainer>
  )
}

export default Post