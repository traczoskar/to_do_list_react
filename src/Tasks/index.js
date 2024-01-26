import "./style.css";

const Tasks = (props) => (
    <ul className="taskList">
        {props.taskList.map(task => (
            <li className={`"taskList__task ${task.done && props.hideDoneTasks ? "taskList__task--hidden" : ""}`} key={task.id}>
                <button className="taskList__button taskList__button--toggleDone">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? "taskList__task--done" : ""}`}>{task.content}</span>
                <button className="taskList__button taskList__button--remove">🗑️</button>
            </li>
        ))}
    </ul >
);

export default Tasks;