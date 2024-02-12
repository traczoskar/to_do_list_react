import { useState, useRef } from "react";
import { FormWrapper, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
      inputRef.current.focus();
    } else {
      alert("Treść zadania nie może być pusta!");
    }
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormWrapper>
  );
};

export default Form;
