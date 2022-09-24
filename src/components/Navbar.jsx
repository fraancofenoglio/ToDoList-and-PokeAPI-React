import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

function Navbar() {
    const context = useContext(TaskContext)
    let {nav} = context

  return (
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="navbar-collapse d-flex justify-content-center w-100">
                <div id='main-nav' className="navbar-nav d-flex flex-row justify-content-around w-25">

                    <NavLink

                        className="nav-item nav-link"
                        to="/tareas"
                        style={({isActive}) => ({color: isActive ? "white" : "", textDecoration: isActive ? "underline" : "", display: 'flex'})}
                    >
                        Tareas
                        {nav.length ? <img style={{marginLeft: "5px"}} src="./emoji-neutral.svg" alt="" />: <></>}
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/pokemon"
                        style={({isActive}) => ({color: isActive ? "white" : "", textDecoration: isActive ? "underline" : ""})}
                    >
                        Pokémon
                    </NavLink>
                </div>
            </div>
        </nav>
  )
}

export default Navbar