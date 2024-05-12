import React from "react";
import { useState } from "react";
import Button from "./Button";
function TaskInput({ handleAdd }) {
  const [input, setInput] = useState("");
  function handleClick() {
    handleAdd(input);
    setInput("");
  }
  return (
    <div>
      <label>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Add a new note"
          className=" text-black font-dosis bg-transparent mr-4 border border-black px-4 w-[400px] py-2"
        />
        <Button size="small" onClick={handleClick}>
          ADD NOTE
        </Button>
      </label>
    </div>
  );
}

export default TaskInput;
