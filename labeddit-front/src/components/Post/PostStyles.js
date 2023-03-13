import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 9px 10px;
    gap: 18px;

    width: 360px;

    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
`
export const Title = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    text-align: center;

    color: #6F6F6F;
`
export const Content = styled.p`
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;

    color: #000000;
`
export const LowerBar = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 12px;

`
export const LikeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    width: 100px;
`
export const Icon = styled.img`
    width: 14px;
`
export const CommentDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    width: 50px;
`
export const Text = styled.p`
    font-weight: 700;
    font-size: 9.56098px;
    line-height: 12px;
    text-align: center;
    color: #6F6F6F;
`
export const Button = styled.button`
    border: none;
    background: none;
`