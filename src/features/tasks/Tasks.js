import { useTasks } from "../../useTasks";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";

function Tasks() {
  const {
    taskList,
    hideDone,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
    toggleHideDone,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList
            taskList={taskList}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            taskList={taskList}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
