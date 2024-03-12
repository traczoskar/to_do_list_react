import { useDispatch, useSelector } from "react-redux";
import Form from "./Form/index";
import TaskList from "./TaskList/index";
import Buttons from "../../../Buttons/index";
import { Button } from "../../../Buttons/styled";
import Section from "../../../common/Section/index";
import Header from "../../../common/Header/index";
import { Container } from "../../../common/Container/styled";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";
import Search from "./Search/index";

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
