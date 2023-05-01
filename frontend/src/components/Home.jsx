import React, { useEffect, useState } from "react";
import {
  addNewTask,
  deleteTask,
  getMyTasks,
  updateTask,
} from "../redux/Actions/taskAction";
import TodoItem from "./TodoItem";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Loader from "./Loader";
const Home = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const { message, tasks, loading } = useSelector((state) => state.myTasks);
  const { isAuthenticated } = useSelector((state) => state.user);

  const updateHandler = async (id) => {
    dispatch(updateTask(id));
  };
  const deleteHandler = (id) => {
    dispatch(deleteTask(id));
  };

  const submitHandler = (e) => {
    setTitle("");
    e.preventDefault();
    dispatch(addNewTask(title));
  };

  useEffect(() => {
    dispatch(getMyTasks());
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, message]);

  if (!isAuthenticated) return <Navigate to={"/login"} />;
  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="login">
        <section>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div>
              <button disabled={loading} type="submit">
                Add Task
              </button>
            </div>
          </form>
        </section>
      </div>

      <section className="todosContainer">
        {tasks?.map((i) => (
          <TodoItem
            title={i.title}
            isCompleted={i.isCompleted}
            updateHandler={updateHandler}
            deleteHandler={deleteHandler}
            id={i._id}
            key={i._id}
            createdAt={i.createdAt}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
