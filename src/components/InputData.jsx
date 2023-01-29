import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const InputData = (props) => {
    const [agregar, setAgregar] = useState('');

    const handleAgregar = (e) => {
        setAgregar(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTarea = { //creo obj que va representar la tarea nueva
            id: uuidv4(),
            texto: agregar,
            completada: false
        }
        props.onSubmit(newTarea);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className='tarea-input' placeholder='Escribe una tarea' onChange={handleAgregar} />
            <button className='tarea-btn'>agregar tarea</button>
        </form>
    )
}

export default InputData