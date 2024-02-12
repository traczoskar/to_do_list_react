// import { useState, useEffect } from "react";

// const defaultTasks = [
//   { id: 1, content: "zrobić zakupy", done: true },
//   { id: 2, content: "wstawić zmywarkę", done: false },
//   { id: 3, content: "umyć samochód", done: false },
//   { id: 4, content: "zabookować bilety", done: false },
// ];

// export const useTasks = () => {
//   const [taskList, setTaskList] = useState(
//     JSON.parse(localStorage.getItem("taskList")) || defaultTasks
//   );

//   useEffect(() => {
//     localStorage.setItem("taskList", JSON.stringify(taskList));
//   }, [taskList]);

//   return {
//     setAllDone,
//     removeTask,
//     taskList,
//   };
// };
