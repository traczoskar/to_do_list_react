import "./style.css";

const Buttons = ({ taskList, hideDone, toggleHideDone }) => (
    <div className="buttons">
        {taskList.length > 0 && (
            <>
                <button
                    onClick={toggleHideDone}
                    className="buttons__button">
                    {`${hideDone ? "Pokaż" : "Ukryj"}`} ukończone
                </button>
                <button
                    className="buttons__button"
                    disabled={taskList.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;