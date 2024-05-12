import { TaskInput, TodoRow, CustomToastContainer } from "./components";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const [currentTime, setCurrentTime] = useState(moment());

  function handleAdd(input) {
    input = input.trim();
    if (!input || validator(input)) {
      !input
        ? toast.error("Task Can't Be Empty")
        : toast.error("You have added same task Previously");
      return;
    }
    setTasks([
      ...tasks,
      { taskId: nanoid(), taskContent: input, taskComplete: false },
    ]);
    toast.success("Added new task");
  }

  function validator(input) {
    const filter = tasks.filter((task) => task.taskContent === input);
    return filter.length;
  }

  function deleteTask(taskId) {
    setTasks((prev) => {
      return prev.filter((task) => task.taskId !== taskId);
    });
  }

  function updateTask(taskId) {
    setTasks((prev) =>
      prev.map((task) =>
        task.taskId === taskId
          ? { ...task, taskComplete: !task.taskComplete }
          : task
      )
    );

    const get = tasks.filter((data) => data.taskId === taskId);
    get[0].taskComplete
      ? toast.success("Let's,Grind")
      : toast.success("Whoo,Completed");
  }
  function editTask(taskId, taskContent) {
    taskContent = taskContent.trim();
    if (validator(taskContent) >= 1) {
      toast.error("Same Task Exist Already!");
      return;
    }
    setTasks((prev) =>
      prev.map((task) =>
        task.taskId === taskId ? { ...task, taskContent: taskContent } : task
      )
    );
  }

  function getActiveTaskCount() {
    return tasks.reduce((acc, task) => {
      return task.taskComplete ? acc + 1 : acc;
    }, 0);
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(moment());
    }, 3600);
    return () => clearInterval(timerID);
  }, []);
  return (
    <div className=" main w-full  min-h-screen  bg-slate-600 text-white flex flex-col items-center  ">
      <h1 className="text-5xl font-sedan text-center mt-5 flex-warp">
        Hello TFU! Have a Productive Day
      </h1>
      <div className="  bg-white justify-center items-center  p-6 mt-4 rounded-lg shadow-xl text-black mb-4">
        <h1 className=" text-4xl font-sedan m-2 text-center">TODO</h1>
        <div className=" flex justify-between mt-2 mb-1">
          <p className=" font-dosis">Time : {moment().format("h:mm a")} </p>
          <p className=" font-dosis">Date : {moment().format("MMM Do YY")}</p>
        </div>
        <hr className="h-px my-4  border-1 bg-gray-700"></hr>
        <TaskInput handleAdd={handleAdd} />
        {tasks && tasks.length > 0 ? (
          <div>
            <h1 className=" text-black font-dosis text-xl mt-4 text-center">
              Keep Going {getActiveTaskCount()}/{tasks.length} Completed
            </h1>
            {tasks.map((note) => (
              <TodoRow
                task={note}
                key={note.taskId}
                deleteTask={deleteTask}
                updateTask={updateTask}
                editTask={editTask}
              />
            ))}
          </div>
        ) : (
          <h1 className=" text-black font-dosis text-xl mt-4 text-center">
            Your TO-DO list is empty add new task now!
          </h1>
        )}
      </div>
      <CustomToastContainer />
    </div>
  );
}
