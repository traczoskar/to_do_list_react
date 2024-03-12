import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Finished, Done, Undone } from "./styled";
import { Container } from "../../../common/Container/styled";
import { getTaskById } from "../tasksSlice";

function TaskPage() {

  interface Params {
    id: string;
  }

  const { id } = useParams<Params>();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title={""} />
      <Section
        title={
          task ? `Zadanie: "${task.content}"` : "Nie znaleziono zadania 😰"
        }
        body={
          !!task && (
            <Finished>
              <strong>Ukończono: </strong>
              {task.done ? <Done>Tak 👏</Done> : <Undone>Nie 😞</Undone>}
            </Finished>
          )
        }
      />
    </Container>
  );
}

export default TaskPage;
