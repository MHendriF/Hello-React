import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addTodoActionCreator,
    asyncAddTodo,
    asyncDeleteTodo,
    asyncReceiveTodos,
    asyncToggleTodo,
    deleteTodoActionCreator,
    toggleTodoActionCreator,
} from '../states/todos/action';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { useEffect } from 'react';

function TodoList() {
    const todos = useSelector((states) => states.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceiveTodos());
    }, [dispatch]);

    function onAddTodo(text) {
        dispatch(asyncAddTodo(text));
    }

    function onToggleTodo(id) {
        dispatch(asyncToggleTodo(id));
    }

    function onDeleteTodo(id) {
        dispatch(asyncDeleteTodo(id));
    }

    return (
        <div>
            <h3>My Todos</h3>
            <TodoInput addTodo={onAddTodo} />

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem {...todo} toggleTodo={onToggleTodo} deleteTodo={onDeleteTodo} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
