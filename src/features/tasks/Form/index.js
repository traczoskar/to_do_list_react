import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormWrapper, Input, Button } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() !== "") {
      dispatch(
        addTask({
          content: newTaskContent.trim(),
          done: false,
          id: nanoid(),
        })
      );
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