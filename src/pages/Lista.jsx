import { useContext, useEffect } from "react";
import { useReducer, useRef } from "react";
import { AgregarButton } from "../components/AgregarButton";
import { BorrarTodoButton } from "../components/BorrarTodoButton";
import { InputText } from "../components/InputText";
import TaskCard from "../components/TaskCard";
import { TaskContext } from "../context/TaskContext";

function Lista() {
    const context = useContext(TaskContext)
    let { pending, setNav} = context
    const input = useRef();

    const [tareas, dispatch] = useReducer((state = [], action)=>{
        switch (action.type) { //accedemos al type del objeto action
            case "agregarTarea": {
                return [
                    ...state, //traemos las tareas que ya teniamos
                    {tarea: action.tarea, id: state.length} //cada tarea es un objeto y accedemos al titulo o lo que sea por ej con .tarea
                ]
            } case "borrarTarea": {
                return state.filter((tarea, i) => i !== action.id)//filtra las tareas y borra segun el id
            }
            case "borrarTareas": {
                return state = [] //borra todas las tareas
            }
            default: {
                return state 
            }
        }
    });

   tareas && tareas.length ? pending = true : pending = false

   useEffect(() => {
    pending ? setNav("(pendientes)") : setNav("")
 },[pending, setNav]) 

    function handleSubmit(e) {
        e.preventDefault();
        if (input.current.value !== "") {
            dispatch({
                type: "agregarTarea",
                tarea: input.current.value, //cada dispatch crea un objeto action que usamos para devolver un state(nueva tarea o borrarlas segun el action.type)
            })
        }
        input.current.value = "" //para vaciar el input
    }

    return (
        <>
            <div className="form-container">
                <h1>Lista de Tareas</h1>

                <form className="form" onSubmit={handleSubmit}>
                    <label>Agregar Tarea:</label>
                    <InputText inputref={input}></InputText>
                    <AgregarButton/>
                    <BorrarTodoButton funcionBorrarTodo={() => dispatch({type: "borrarTareas"})}/>
                </form>

            </div>
            <div className="tareas">
                {tareas && tareas.map((t, i) => ( //si existe tareas (con cond. ternario) hacemos un map() y lo mostramos si no, "div" vacio
                    <div className="task-card" key={i}>
                        <TaskCard tarea={t} funcionBorrarTarea={() => dispatch({type: "borrarTarea", id: i})} />
                    </div>

                ))}
                
            </div>
        </> 
    );//con el boton lanzamos el dispatch que crea un objeto solo con un type, no hace falta title, porque va a borrar todo
}
export default Lista