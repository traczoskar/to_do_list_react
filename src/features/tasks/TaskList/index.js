import { useSelector, useDispatch } from "react-redux";
import { List, Task, Button, Content } from "./styled.js";
import {
  selectHideDone,
  selectTasks,
  toggleTaskDone,
  removeTask,
} from "../tasksSlice.js";

const TaskList = () => {
  const taskList = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  return (
    <List>
      {taskList.map((task) => (
        <Task hidden={task.done && hideDone} key={task.id}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>{task.content}</Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </Button>
        </Task>
      ))}
    </List>
  );
};

export default TaskList;
