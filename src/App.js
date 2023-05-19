import { TaskCreator } from "./components/TaskCreator";
import { useState, useEffect } from "react";
import "./App.css";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";

function App() {
  //USESTATE
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  //USEEFECTTS

  useEffect(() => {
    let data = localStorage.getItem("tarea");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarea", JSON.stringify(taskItems));
  }, [taskItems]);

  /**---------------------Funciones----------------------------------- */
  //Crear Tarea
  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };
  //Funcion que cambia el estado del checkbox
  const toogleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };
  //Funcion que elimina tareas
  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  /**-------------------------------------------------------------------- */
  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <VisibilityControl
          description="Tareas Completadas"
          isChecked={showCompleted}
          callback={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {showCompleted && (
          <TaskTable
            task={taskItems}
            toogleTask={toogleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
