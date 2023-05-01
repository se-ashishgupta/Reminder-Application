import axios from "axios";
import { server } from "../../index";

export const getMyTasks = () => async (dispatch) => {
  try {
    dispatch({
      type: "myTasksRequest",
    });

    const { data } = await axios.get(`${server}/task/my`, {
      withCredentials: true,
    });
    dispatch({
      type: "myTasksSuccess",
      payload: data.task,
    });
  } catch (error) {
    dispatch({
      type: "myTasksFailure",
      payload: error.response.data.message,
    });
  }
};

export const addNewTask = (title) => async (dispatch) => {
  try {
    dispatch({
      type: "newTaskRequest",
    });
    const { data } = await axios.post(
      `${server}/task/new`,
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: "newTaskSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "newTaskFailure",
      payload: error.response.data.message,
    });
  }
};
export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteTaskRequest",
    });
    const { data } = await axios.delete(`${server}/task/${id}`, {
      withCredentials: true,
    });
    dispatch({
      type: "deleteTaskSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteTaskFailure",
      payload: error.response.data.message,
    });
  }
};
export const updateTask = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "updateTaskRequest",
    });
    const { data } = await axios.put(
      `${server}/task/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "updateTaskSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updateTaskFailure",
      payload: error.response.data.message,
    });
  }
};
