import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
// import Container from "./Container";

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
    <Container>
      <main className="container">
        <Header title="Lista zadań" />
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
    </Container>

  );
};


export default App;
