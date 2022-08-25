import { useReducer, useRef } from "react";
import { AgregarButton } from "./AgregarButton";
import { BorrarTodoButton } from "./BorrarTodoButton";
import { InputText } from "./InputText";

function Lista() {
    const input = useRef();

    const [tareas, dispatch] = useReducer((state = [], action)=>{
        switch (action.type) { //accedemos al type del objeto action
            case "agregarTarea": {
                return [
                    ...state, //traemos las tareas que ya teniamos
                    {tarea: action.tarea} //cada tarea es un objeto y accedemos al titulo o lo que sea por ej con .title
                ]
            }
            case "borrarTarea": {
                return state = [] //borra todas las tareas
            }
            default: {
                return state 
            }
        }
    });

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
            <h1>Lista de Tareas</h1>

            <form className="form" onSubmit={handleSubmit}>
                <label>Tarea:</label>
                <InputText inputref={input}></InputText>
                <AgregarButton/>
                <BorrarTodoButton funcionBorrarTodo={() => dispatch({type: "borrarTarea"})}/>
            </form>

            <div className="tareas">
                {tareas && tareas.map((t, i) => ( //si existe tareas (con cond. ternario) hacemos un map() y lo mostramos si no, "div" vacio
                    <div className="tarea" key={i}>
                        <p>► {t.tarea}</p>
                    </div>
                ))
                }
            </div> 
        </>
    );//con el boton lanzamos el dispatch que crea un objeto solo con un type, no hace falta title, porque va a borrar todo
}
export default Lista