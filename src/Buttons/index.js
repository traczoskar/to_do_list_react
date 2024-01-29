import "./style.css";

const Buttons = ({ taskList, hideDone }) => (
    <div className="buttons">
        {taskList.length > 0 && (
            <>
                <button className="buttons__button">
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