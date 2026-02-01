"use client"
import React from 'react';
import styled from "styled-components"

const Template = styled.div`
    width: 512px;
    margin: auto;
    border-radius: 4px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Title = styled.div`
    background: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    background: white;
`

interface Props {
    children: React.ReactNode
}
const TodoTemplate = ({children}:Props) => {
    return (
        <Template>
            <Title>일정관리</Title>
            <Content>{children}</Content>
        </Template>
    );
};

export default TodoTemplate;