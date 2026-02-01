"use client"
import {useReducer} from "react";
import {Todo} from "@/types/todo";
import TodoList from "@/components/TodoList";
import TodoInsert from "@/components/TodoInsert";
import TodoTemplate from "@/components/TodoTemplate";

const initialTodos:Todo[] = [
    { id:1, text: "HTML 공부", checked: true},
    { id:2, text: "CSS 공부", checked: true},
    { id:3, text: "JavaScript 공부", checked: true},
    { id:4, text: "React 공부", checked: true},

]

type Action =
    | {type: "INSERT"; text: string}
    | {type: "DELETE"; id: number}
    | {type: "TOGGLE"; id: number}

const todoReducer = (state: Todo[], action: Action) => {
    switch (action.type) {
        case "INSERT":
            const nextId = state.length>0 ? Math.max(
                ...state.map(todo => todo.id)) + 1 : 1
            return    [
                ...state,
                {id: nextId, text: action.text, checked: false},
            ]
        case "DELETE":
            return state.filter(item=>item.id !== action.id)
        case "TOGGLE":

            return state.map(todo =>
                todo.id === action.id ?
                    {...todo, checked: !todo.checked}
                    : todo
            )
        default:
            return state;
    }
}

export default function Home() {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const handleInsert = (text:string) => {
        dispatch({type: "INSERT", text});
    }
    const handleDelete = (id:number) => {
        dispatch({type: "DELETE", id});
    }
    const handleToggle = (id:number) => {
        dispatch({type: "TOGGLE", id});
    }
    return (
        <TodoTemplate>
            <TodoInsert
                handleInsert={handleInsert}
            />
            <TodoList
                todos={todos}
                handleDelete = {handleDelete}
                handleToggle = {handleToggle}
            />
        </TodoTemplate>
    );
}