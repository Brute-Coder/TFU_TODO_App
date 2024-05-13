import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { MdDeleteOutline as Del } from "react-icons/md";

function TodoRow({ task, deleteTask, updateTask, editTask }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex justify-between p-2 border border-black m-2 shadow-md  rounded-md${
        task.isComplete ? "bg-opacity-50 bg-slate-500" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Checkbox task={task} updateTask={updateTask} editTask={editTask} />
      <div className={isHovered ? "block" : "hidden"}>
        <Button
          size="small"
          onClick={() => deleteTask(task.taskId)}
          className="bg-red-400"
        >
          <Del />
        </Button>
      </div>
    </div>
  );
}

export default TodoRow;
