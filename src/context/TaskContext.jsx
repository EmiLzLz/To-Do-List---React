import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

//nombre del contexto
export const TaskContext = createContext()

//contexto que engloba todos los componentes
export function TaskContextProvider(props) {
  //context se queda con el arreglo para que tasklist y taskform puedan acceder a el
  const [tasks, setTasks] = useState([]);

  //funcion para crear una tarea
  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }

  //funcion para eliminar una tarea
  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
