import { useState } from "react";
import { FormWrapper, InputWindow, Button } from "./styled";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    } else {
      alert("Treść zadania nie może być pusta!");
    }
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <InputWindow
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormWrapper>
  );
};

export default Form;
