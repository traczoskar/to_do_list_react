import "./style.css";

const Buttons = ({ taskList, hideDoneTasks }) => {
    taskList.length > 0 && (
        <div className="buttons">
            <button className="buttons__button">
                {`${hideDoneTasks ? "Pokaż" : "Ukryj"}`} ukończone
            </button>
            <button
                className="buttons__button"
                disabled={taskList.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    );
};



export default Buttons;