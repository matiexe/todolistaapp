import { TaskRow } from "./TaskRow";

export const TaskTable = ({ task, toogleTask, showCompleted = false }) => {
  const taskTableRow = (doneValue) => {
    task
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toogleTask={toogleTask} />
      ));
  };
  return (
    <table className="table table-striped table-bordered table-dark border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>{taskTableRow(showCompleted)}</tbody>
    </table>
  );
};
