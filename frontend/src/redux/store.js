import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../redux/Reducers/userReducer";
import { myTasksReducer } from "./Reducers/taskReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    myTasks: myTasksReducer,
  },
});

export default store;
