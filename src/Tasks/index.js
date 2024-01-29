import "./style.css";

const Tasks = ({ taskList, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="taskList">
        {taskList.map(task => (
            <li
                className={
                    `taskList__task ${task.done && hideDone ? "taskList__task--hidden" : ""}`
                }
                key={task.id}>
                <button
                    className="taskList__button taskList__button--toggleDone"
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? "taskList__task--done" : ""}`}>{task.content}</span>
                <button
                    className="taskList__button taskList__button--remove"
                    onClick={() => removeTask(task.id)}>
                    🗑️
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;