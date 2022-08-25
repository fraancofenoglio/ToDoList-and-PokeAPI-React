import { useReducer, useRef } from "react";

function Lista() {
    const input = useRef();

    const [tareas, dispatch] = useReducer((state = [], action)=>{
        switch (action.type) {
            case "agregarTarea": {
                return [
                    ...state, 
                    {title: action.title}
                ]
            }
            case "borrarTarea": {
                console.log(state)
                return state = []
            }
            default: {
                return state 
            }
        }
    });

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: "agregarTarea",
            title: input.current.value
        })

        input.current.value = ""
    }


    return (
        <div className="container">
            <h1>Lista de Tareas</h1>

            <form onSubmit={handleSubmit}>
                <label>Tarea</label>
                <input type="text" name="titulo" ref={input}/>
                <input type="submit" value="enviar" />
            </form>

            <div className="tareas">
                {tareas ? tareas.map((tarea, i) => (
                    <div className="tarea" key={i}>
                        <p>► {tarea.title}</p>
                    </div>
                    
                )): <></>}
                <button onClick={() => dispatch({type: "borrarTarea"})}>Borrar todas</button>
            </div>
        </div>
    );
}
export default Lista