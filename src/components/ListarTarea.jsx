import React, { useState } from 'react'
import InputData from './InputData'
import Tarea from './Tarea';

const ListarTarea = () => {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
        setTareas([...tareas, tarea]);
    }

    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id)); //no lo incluyo si el id !=
    }

    const tareaCompletada = (id) => {
        setTareas(
            tareas.map(tarea => {
                if (tarea.id === id) tarea.completada = !tarea.completada;
                return tarea;
            })
        );
    }
    return (
        <>
            <InputData onSubmit={agregarTarea} />
            <div className='tarea-lista-contenedor'>
                {
                    tareas.map((tarea) =>
                        <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} tareaCompletada={tareaCompletada} eliminarTarea={eliminarTarea} />
                    )
                }
            </div>
        </>
    )
}

export default ListarTarea