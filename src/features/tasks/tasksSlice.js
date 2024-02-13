import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    taskList: [
      { id: "1", content: "zrobić zakupy", done: true },
      { id: "2", content: "wstawić zmywarkę", done: false },
      { id: "3", content: "umyć samochód", done: false },
      { id: "4", content: "zabookować bilety", done: false },
    ],
    hideDone: false,
  },
  reducers: {
    addTask: ({ taskList }, { payload: task }) => {
      taskList.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ taskList }, { payload: taskId }) => {
      const index = taskList.findIndex(({ id }) => id === taskId);
      taskList[index].done = !taskList[index].done;
    },
    removeTask: ({ taskList }, { payload: taskId }) => {
      const index = taskList.findIndex(({ id }) => id === taskId);
      taskList.splice(index, 1);
    },
    setAllDone: ({ taskList }) => {
      taskList.forEach((task) => {
        task.done = true;
      });
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
} = tasksSlice.actions;
const selectTasksState = (state) => state.taskList;
export const selectTasks = (state) => selectTasksState(state).taskList;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectIsTaskListEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export default tasksSlice.reducer;
