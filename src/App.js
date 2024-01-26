

function App() {
  return (
    <main className="container">
      <h1 className="container__header">Lista zadań</h1>
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <form className="form js-form">
          <input className="form__input js-input" placeholder="Co jest do zrobienia?" autofocus />
            <button className="form__button js-addTask">Dodaj zadanie</button>
        </form>
      </section>

      <section className="section">
        <div className="section--grid">
          <h2 className="section__title">Lista zadań</h2>
          <div className="buttons js-buttons">
          </div>
        </div>
        <ul className="taskList js-tasks"></ul>
      </section>
    </main>
  );
};


export default App;
