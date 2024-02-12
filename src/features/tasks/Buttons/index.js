import { Button, ButtonsWrapper } from "./styled";

const Buttons = ({ taskList, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonsWrapper>
    {taskList.length > 0 && (
      <>
        <Button onClick={toggleHideDone}>
          {`${hideDone ? "Pokaż" : "Ukryj"}`} ukończone
        </Button>
        <Button
          onClick={setAllDone}
          className="buttons__button"
          disabled={taskList.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </ButtonsWrapper>
);

export default Buttons;
