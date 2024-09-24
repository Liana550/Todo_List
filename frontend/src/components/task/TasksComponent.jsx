import React from "react";
import OneTaskComponent from "./OneTaskComponent";
import { MainContext } from "../../App";
import { useContext } from "react";
function TasksComponent() {
  const { todoList } = useContext(MainContext);

  return (
    <div className="box">
      <h1>Tasks</h1>
      {todoList &&
        todoList.map((el, index) => <OneTaskComponent el={el} key={index} />)}
    </div>
  );
}

export default TasksComponent;
