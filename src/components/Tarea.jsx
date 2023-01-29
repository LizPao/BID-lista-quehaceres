import React from 'react'


const Tarea = ({ id, texto, completada, tareaCompletada, eliminarTarea }) => {
    return (
        <div className='tarea-contenedor '>
            <div className={completada ? 'tarea-texto completada' : 'tarea-texto'}>{texto}</div>
            <input type="checkbox" onClick={() => tareaCompletada(id)} />
            <button className='btn-eliminar' onClick={() => eliminarTarea(id)}>Eliminar</button>
        </div>
    )
}

export default Tarea

