import React from "react";
import { MainContext } from "../../App";
import { useContext } from "react";
import OneFinishComponent from "./OneFinishComponent";
function FinishComponet() {
  const { finishList } = useContext(MainContext);
  return (
    <div className="box">
      <h1>Finish Tasks</h1>
      {finishList &&
        finishList.map((el, index) => (
          <OneFinishComponent key={index} el={el} />
        ))}
    </div>
  );
}

export default FinishComponet;
