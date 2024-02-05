import { List, Task, Button, Content } from "./styled.js";

const Tasks = ({ taskList, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {taskList.map((task) => (
      <Task hidden={task.done && hideDone} key={task.id}>
        <Button toggleDone onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </Button>
        <Content done={task.done}>{task.content}</Content>
        <Button remove onClick={() => removeTask(task.id)}>
          🗑️
        </Button>
      </Task>
    ))}
  </List>
);

export default Tasks;
