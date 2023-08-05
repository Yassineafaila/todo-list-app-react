import React, { useState } from "react";

function EditTodo({ ediTodo, task }) {
  const [value, setValue] = useState(task.body);
  const HandlerSubmit = (e) => {
    e.preventDefault();
    ediTodo(value,task.id);
    setValue("");
  };
  return (
    <div className="todo-form">
      <form className="my-2" onSubmit={HandlerSubmit}>
        <div className="flex items-center justify-between gap-2">
          <input
            className="input-task border border-gray-600 rounded-md p-2 md:p-3 flex-1"
            type="text"
            value={value}
            placeholder="Update Task"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="todo-btn transition duration-100 ease-linear hover:opacity-70 text-white p-2 md:p-3 uppercase rounded-md cursor-pointer md:w-24 lg:w-24"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTodo