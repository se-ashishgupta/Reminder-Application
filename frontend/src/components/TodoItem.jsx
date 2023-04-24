import React from "react";

const TodoItem = ({
  title,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
  createdAt,
}) => {
  const cDate = new Date(createdAt);
  const stringPostDate = cDate.toLocaleString();
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{stringPostDate}</p>
      </div>
      <article>
        <input
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={isCompleted}
        />
        <button onClick={() => deleteHandler(id)} className="btn">
          Delete
        </button>
      </article>
    </div>
  );
};

export default TodoItem;
