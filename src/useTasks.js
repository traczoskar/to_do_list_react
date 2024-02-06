import { useState, useEffect } from "react";

export const useTasks = () => {
  const defaultTasks = [
    { id: 1, content: "zrobić zakupy", done: true },
    { id: 2, content: "wstawić zmywarkę", done: false },
    { id: 3, content: "umyć samochód", done: false },
    { id: 4, content: "zabookować bilety", done: false },
  ];

  const taskListLocalStorage = localStorage.getItem("taskList");

  const [taskList, setTaskList] = useState(
    JSON.parse(taskListLocalStorage) || defaultTasks
  );

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const removeTask = (id) => {
    setTaskList((taskList) => taskList.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTaskList((taskList) =>
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTaskList((taskList) =>
      taskList.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (newTaskContent) => {
    setTaskList((taskList) => [
      ...taskList,
      {
        content: newTaskContent,
        done: false,
        id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      },
    ]);
  };

  return {
    setAllDone,
    addNewTask,
    toggleTaskDone,
    removeTask,
    taskList,
  };
};
