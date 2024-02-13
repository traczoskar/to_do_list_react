import { useDispatch, useSelector } from "react-redux";
import Form from "./Form/index.js";
import TaskList from "./TaskList/index.js";
import Buttons from "../../../Buttons/index.js";
import { Button } from "../../../Buttons/styled.js";
import Section from "../../../common/Section/index.js";
import Header from "../../../common/Header/index.js";
import { Container } from "../../../common/Container/styled.js";
import { fetchExampleTasks, selectLoading } from "../tasksSlice.js";
import Search from "./Search/index.js";

function TasksPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Button
            loading={loading}
            onClick={() => dispatch(fetchExampleTasks())}
          >
            {loading ? "Ładowanie zadań..." : "Pobierz przykładowe zadania"}
          </Button>
        }
      />
      <Section title="Wyszukiwarka" body={<Search />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
