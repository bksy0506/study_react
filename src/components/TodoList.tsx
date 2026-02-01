import React from 'react';
import { Todo } from "@/types/todo";
import styled from "styled-components";
import TodoListitem from "@/components/TodoListitem";

const List = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow: auto;
`;

interface Props {
    todos: Todo[];
    handleDelete: (id: number) => void;
    handleToggle: (id: number) => void;
}

const TodoList = ({ todos, handleDelete, handleToggle }: Props) => {
    return (
        <List>
            {todos.map(todo => (
                <TodoListitem
                    key={todo.id}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            ))}
        </List>
    );
};

export default TodoList;