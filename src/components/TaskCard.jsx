function TaskCard({tarea, funcionBorrarTarea}) {
  return (
    <>
        <p className='task-info'>► {tarea.tarea}</p>
        <button className='borrar-tarea' onClick={funcionBorrarTarea}>Eliminar<img style={{marginLeft: "5px"}} src="./trash3-fill.svg" alt="" /></button>
    </>
  )
}

export default TaskCard