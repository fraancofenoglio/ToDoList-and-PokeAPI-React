import {createContext, useState} from 'react'

export const TaskContext = createContext();

function TaskContextProvider({children}) {
  const [nav, setNav] = useState("")

    const pending = false

  return (

    <TaskContext.Provider  value={{ pending: pending, nav: nav, setNav: setNav}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider