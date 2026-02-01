import React from "react";
import { Todo } from "@/types/todo";
import styled from "styled-components";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline, MdCheckCircleOutline,
} from "react-icons/md";

const Item = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;

    &:nth-child(even) {
        background: #f8f9fa;
    }
`;

const Checkbox = styled.div`
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
`;

const Text = styled.div<{ checked: boolean }>`
    margin-left: 0.5rem;
    flex: 1;
    color: ${({ checked }) => (checked ? "#adb5bd" : "inherit")};
    text-decoration: ${({ checked }) =>
            checked ? "line-through" : "none"};
`;

const Delete = styled.div`
    color: #ff6b6b;
    cursor: pointer;
`;
interface Props {
    todo: Todo;
    handleDelete: (id: number) => void;
    handleToggle: (id: number) => void;
}

const TodoListItem = ({ todo, handleDelete, handleToggle }: Props) => {
    return (
        <Item>

            <Checkbox onClick={() => handleToggle(todo.id)}>
                {todo.checked ? <MdCheckBox /> : <MdCheckCircleOutline />}

                <Text checked={todo.checked}>{todo.text}</Text>
            </Checkbox>

            <Delete onClick={() => handleDelete(todo.id)}>
                <MdRemoveCircleOutline />
            </Delete>
        </Item>
    );
};
export default TodoListItem;
