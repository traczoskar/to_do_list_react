import { Task } from "./types";

const localStorageKey = "taskList";

export const saveTasksInLocalStorage = (taskList: Task[]) =>
  localStorage.setItem(localStorageKey, JSON.stringify(taskList));

const tasksFromLocalStorage = localStorage.getItem(localStorageKey);

export const getTasksFromLocalStorage = () =>
  (tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : []) as Task[];
