import React, { useState } from "react";
import Button from "./Button";
import { IoIosSave as Save } from "react-icons/io";

function Checkbox({ updateTask, task, editTask }) {
  const [editMode, setEditMode] = useState(false);
  const [input, setInputValue] = useState(task.taskContent);

  //console.log(active);
  return (
    <div className=" flex flex-row gap-4">
      <input
        type="checkbox"
        checked={task.taskComplete}
        onChange={() => updateTask(task.taskId)}
        className=" p-1"
      />
      {editMode ? (
        <>
          <input
            type="text"
            value={input}
            onChange={(e) => setInputValue(e.target.value)}
            className=" border border-black p-1 rounded-md w-[300px]"
          />
          <Button
            className="bg-green-500"
            onClick={() => {
              editTask(task.taskId, input);
              setEditMode((prev) => !prev);
            }}
          >
            <Save />
          </Button>
        </>
      ) : (
        <div onClick={() => setEditMode((prev) => !prev)}>
          <p
            className={`font-dosis text-xl  ${
              task.taskComplete ? " line-through opacity-50" : ""
            }`}
          >
            {task && task.taskContent}
          </p>
        </div>
      )}
    </div>
  );
}

export default Checkbox;
