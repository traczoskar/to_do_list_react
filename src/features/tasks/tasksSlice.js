import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    taskList: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
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
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.taskList = tasks;
    },
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
  toggleLoading,
} = tasksSlice.actions;
const selectTasksState = (state) => state.taskList;
export const selectTasks = (state) => selectTasksState(state).taskList;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectIsTaskListEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export const selectLoading = (state) => selectTasksState(state).loading;

export default tasksSlice.reducer;
