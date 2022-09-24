import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{width: "100%", display: "flex", alignItems: "center", flexDirection: "column"}}>
        <h1>¡Página no encontrada, lo sentimos!</h1>

        <Link style={{fontSize: "20px",color: "darkred"}} to="/tareas"> Página principal</Link>
    </div>
  )
}

export default NotFound