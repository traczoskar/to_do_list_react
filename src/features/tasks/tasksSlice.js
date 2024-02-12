import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    taskList: [
      { id: 1, content: "zrobić zakupy", done: true },
      { id: 2, content: "wstawić zmywarkę", done: false },
      { id: 3, content: "umyć samochód", done: false },
      { id: 4, content: "zabookować bilety", done: false },
    ],
    hideDone: false,
  },
  reducers: {
    addTask: ({ taskList }, { payload }) => {
      taskList.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ taskList }, { payload }) => {
      const index = taskList.findIndex(({ id }) => id === payload);
      taskList[index].done = !taskList[index].done;
    },
    removeTask: ({ taskList }, { payload }) => {
      const index = taskList.findIndex(({ id }) => id === payload);
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
export const selectTasks = (state) => state.taskList;
export default tasksSlice.reducer;

// console.log(selectTasks(taskList));
