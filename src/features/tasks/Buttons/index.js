import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { Button, ButtonsWrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const { taskList, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <ButtonsWrapper>
      {taskList.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {`${hideDone ? "Pokaż" : "Ukryj"}`} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={taskList.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsWrapper>
  );
};

export default Buttons;
