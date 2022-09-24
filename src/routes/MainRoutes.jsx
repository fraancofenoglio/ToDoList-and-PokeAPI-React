import {Routes, Route, Navigate} from "react-router-dom"
import Lista from "../pages/Lista"
import NotFound from "../pages/NotFound"
import Pokemon from "../pages/Pokemon"

function MainRoutes() {
  return (
    <>
        <Routes>
            <Route path="/tareas" element={<Lista/>}/>
            <Route path="/pokemon" element={<Pokemon/>}/>
            <Route path="*" element={<NotFound />} />

            <Route path='/' element={<Navigate to="/tareas" />} />
        </Routes>

    </>
  )
}

export default MainRoutes