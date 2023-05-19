import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const handleSubmit = (e) => {
    if (newTaskName.trim() === "") {
      alert("Ingrese el nombre de la tarea");
      return;
    }
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="row mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa nueva tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          autoFocus
        />
      </div>
      <div className="row p-10 d-flex aling-items-center">
        <button className="btn btn-primary btn-sm" type="submit">
          Guardar Tarea
        </button>
      </div>
    </form>
  );
};
