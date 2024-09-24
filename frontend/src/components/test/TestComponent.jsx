import React from "react";
import { MainContext } from "../../App";
import { useContext } from "react";
import OneTestComponent from "./OneTestComponent";
function TestComponent() {
  const { testList } = useContext(MainContext);
  return (
    <div className="box">
      <h1>Test Tasks</h1>
      {testList &&
        testList.map((el, index) => <OneTestComponent key={index} el={el} />)}
    </div>
  );
}

export default TestComponent;
