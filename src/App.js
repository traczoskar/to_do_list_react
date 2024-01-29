import { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";



function App() {

  const [hideDone, setHideDone] = useState(false);

  const [taskList, setTaskList] = useState([
    { id: 1, content: "zrobić zakupy", done: true, },
    { id: 2, content: "wstawić zmywarkę", done: false, },
    { id: 3, content: "umyć samochód", done: false, },
    { id: 4, content: "zabookować bilety", done: false, },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTaskList(taskList => taskList.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTaskList(taskList => taskList.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTaskList(taskList => taskList.map(task => ({
      ...task,
      done: true,
    })));
  };


  return (
    <Container>
      <main className="container">
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          body={
            <Tasks
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
      </main>
    </Container>
  );
};


export default App;
