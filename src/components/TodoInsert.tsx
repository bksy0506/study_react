import React, {useState} from 'react';
import styled from "styled-components";
const Form = styled.form`
    display: flex;
    background:#495057;
`
const Input = styled.input`
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: white;
    
    &::placeholder {
        color: #dee2e6;
    }
    flex: 1;
`
const Button = styled.button`
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        background: #adb5bd;
    }
`
interface Props {
    handleInsert: (text: string) => void;


}

const TodoInsert = ({handleInsert}: Props) => {
    const[value, setValue]=useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("value",event.target.value);
        console.log("name",event.target.name);
        setValue(event.target.value) //타겟 벨류 하는이유
    }
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!value) return;
        handleInsert(value);
        setValue('');


}
    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text"
                   name="text"
                   value={value}
                   onChange={handleChange}
                   placeholder="할 일을 입력하세요."

            />
            <Button type="submit">버튼</Button>
        </Form>
    );
};

export default TodoInsert;