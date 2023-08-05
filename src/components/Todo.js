import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Todo({ task, ChangeCompleted, deleteHandler, editHandler }) {
  return (
    <div className="Todo flex items-center justify-between p-2 md:p-3 lg:p-3 mx-4 my-4 md:my-6 rounded-md">
      <p
        className={`text-gray-700 cursor-pointer capitalize ${
          task.completed ? "completed" : ""
        }`}
        id={task.id}
        onClick={() => ChangeCompleted(task.id)}
      >
        {task.body}
      </p>
      <div className="flex-1 flex justify-end gap-4 ">
        <FontAwesomeIcon
          icon={faPen}
          className="icon 
        cursor-pointer"
          onClick={() => editHandler(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="icon cursor-pointer"
          onClick={() => deleteHandler(task.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
