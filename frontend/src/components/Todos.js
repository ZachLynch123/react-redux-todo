import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)

    const handleClick = id => dispatch({
        type: 'DELETE_TODO',
        payload: id,
    });

    if (!todos || !todos.length) {
        return <p>NO TODOS</p>
    }
    return (
        <div>
            <ul>
                {todos.map(todo => <li onClick={() => handleClick(todo.id)}>{todo.label}</li>)}
            </ul>
        </div>
    )
}
