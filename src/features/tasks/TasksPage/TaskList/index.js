import { useSelector, useDispatch } from "react-redux";
import { useQueryParameter } from "../useQueryParameters.js";
import { List, Task, Button, Content, StyledLink } from "./styled.js";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice.js";
import searchQueryParamName from "../searchQueryParamName.js";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const taskList = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {taskList.map((task) => (
        <Task hidden={task.done && hideDone} key={task.id}>
          <Button toggledone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </Button>
        </Task>
      ))}
    </List>
  );
};

export default TaskList;
