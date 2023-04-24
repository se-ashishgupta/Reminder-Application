import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const myTasksReducer = createReducer(initialState, {
  myTasksRequest: (state) => {
    state.loading = true;
  },
  myTasksSuccess: (state, action) => {
    state.loading = false;
    state.tasks = action.payload;
  },
  myTasksFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  newTaskRequest: (state) => {
    state.loading = true;
  },
  newTaskSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  newTaskFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  updateTaskRequest: (state) => {
    state.loading = true;
  },
  updateTYaskSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updateTYaskFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  deleteTaskRequest: (state) => {
    state.loading = true;
  },
  deleteTaskSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deleteTaskFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
