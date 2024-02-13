import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import taskListReducer from "./features/tasks/tasksSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
