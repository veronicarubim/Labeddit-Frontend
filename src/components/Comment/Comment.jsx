import React from 'react'
import { CommentContainer, Title, Content, LowerBar, LikeDiv, Button, Icon, Text} from './CommentStyles'
import Like from '../../assets/like.png'
import Dislike from '../../assets/dislike.png'

const Comment = () => {
  return (
    <CommentContainer>
        <Title>Enviado por </Title>
        <Content></Content>
        <LowerBar>
            <LikeDiv>
                <Button>
                    <Icon src={Like}></Icon>
                </Button>
                <Text></Text>
                <Button>
                    <Icon src={Dislike}></Icon>
                </Button>
            </LikeDiv>
        </LowerBar>
    </CommentContainer>
  )
}

export default Comment