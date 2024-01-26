import Form from "./Form";

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
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
      </section>
      <Form />
      <section className="section">
        <div className="section--grid">
          <h2 className="section__title">Lista zadań</h2>
          <div className="buttons">
          </div>
        </div>
        <ul className="taskList"></ul>
      </section>
    </main>
  );
};


export default App;
