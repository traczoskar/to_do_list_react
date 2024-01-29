import "./style.css";

const Tasks = ({ taskList, hideDone, removeTask}) => (
    <ul className="taskList">
        {taskList.map(task => (
            <li
                className={
                    `taskList__task ${task.done && hideDone ? "taskList__task--hidden" : ""}`
                }
                key={task.id}>
                <button className="taskList__button taskList__button--toggleDone">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? "taskList__task--done" : ""}`}>{task.content}</span>
                <button 
                onClick={() => removeTask(task.id)}
                className="taskList__button taskList__button--remove">🗑️</button>
            </li>
        ))}
    </ul >
);

export default Tasks;