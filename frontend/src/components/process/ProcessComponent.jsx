import React from "react";
import { MainContext } from "../../App";
import { useContext } from "react";
import OneProcessComponent from "./OneProcessComponent";
function ProcessComponent() {
  const { proList } = useContext(MainContext);
  return (
    <div className="box">
      <h1>Process Tasks</h1>
      {proList &&
        proList.map((el, index) => <OneProcessComponent key={index} el={el} />)}
    </div>
  );
}

export default ProcessComponent;
