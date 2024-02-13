import { fetchExampleTasks, selectTasks, toggleLoading } from "./tasksSlice";
import {
  delay,
  call,
  put,
  takeLatest,
  select,
  takeEvery,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { setTasks } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield put(toggleLoading());
    yield delay(2500);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
    yield put(toggleLoading());
  } catch (error) {
    yield call(alert("Coś poszło nie tak!"));
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
