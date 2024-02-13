import {
  selectHideDone,
  selectIsTaskListEmpty,
  toggleHideDone,
  setAllDone,
  selectIsEveryTaskDone,
} from "../tasksSlice";
import { Button, ButtonsWrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const isTaskListEmpty = useSelector(selectIsTaskListEmpty);
  const dispatch = useDispatch();

  return (
    <ButtonsWrapper>
      {!isTaskListEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonsWrapper>
  );
};

export default Buttons;
