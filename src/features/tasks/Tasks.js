import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "../../Buttons";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../Buttons/styled.js";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { fetchExampleTasks, selectLoading } from "./tasksSlice.js";

function Tasks() {
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
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
