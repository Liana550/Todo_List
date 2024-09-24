import React from "react";
import InputsComponent from "./components/InputsComponent";
import TasksComponent from "./components/task/TasksComponent";
import ProcessComponent from "./components/process/ProcessComponent";
import TestComponent from "./components/test/TestComponent";
import FinishComponet from "./components/finish/FinishComponet";
import { getData } from "./fetch";
import "./App.css";
import { useEffect, useState } from "react";
export const MainContext = React.createContext(null);
function App() {
  const [todoList, setTodoList] = useState([]);
  const [proList, setProList] = useState([]);
  const [testList, setTestList] = useState([]);
  const [finishList, setFinishList] = useState([]);
  const [obj, setObj] = useState({});
  const func = async () => {
    const data = await getData();
    console.log(data);

    setTodoList(data.dataList);
    setProList(data.proList);
    setTestList(data.testList);
    setFinishList(data.finishList);
    console.log(proList);
  };
  useEffect(() => {
    func();
  }, [obj]);
  return (
    <div className="App">
      <MainContext.Provider
        value={{ todoList, setObj, proList, testList, finishList }}
      >
        <InputsComponent />
        <div className="content1">
          <TasksComponent />
          <ProcessComponent />
          <TestComponent />
          <FinishComponet />
        </div>
      </MainContext.Provider>
    </div>
  );
}

export default App;
