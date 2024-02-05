import { ButtonSpecial, ButtonsWrapper } from "./styled";

const Buttons = ({ taskList, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonsWrapper>
    {taskList.length > 0 && (
      <>
        <ButtonSpecial onClick={toggleHideDone}>
          {`${hideDone ? "Pokaż" : "Ukryj"}`} ukończone
        </ButtonSpecial>
        <ButtonSpecial
          onClick={setAllDone}
          className="buttons__button"
          disabled={taskList.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </ButtonSpecial>
      </>
    )}
  </ButtonsWrapper>
);

export default Buttons;
