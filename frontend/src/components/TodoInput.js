import React, { useState } from 'react'
import { useDispatch} from 'react-redux';

export default function TodoInput() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState();
    const handleChange = e => setNewTodo(e.target.value);
    const handleClick = () => dispatch({
        type: 'ADD_TODO',
        payload: {
            label: newTodo,
            id: Math.ceil(Math.random()* 100),

        }
    })       

    return (
        <div>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button onClick={handleClick}>ADD TODO</button>
        </div>
    )
}
