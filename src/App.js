import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

let taskList = [
  {
    id: 1,
    content: "zrobić zakupy 🛍️",
    done: true,
  },
  {
    id: 2,
    content: "wstawić zmywarkę 🍽️",
    done: false,
  },
  {
    id: 3,
    content: "umyć samochód 🚙",
    done: false,
  },
  {
    id: 4,
    content: "zabookować bilety 🎟️",
    done: false,
  },
];

let hideDoneTasks = false;

function App() {
  return (
    <main className="container">
      <h1 className="container__header">Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks taskList={taskList} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons taskList={taskList} hideDoneTasks={hideDoneTasks} />}
      />
    </main>
  );
};


export default App;
