import React, { useState } from "react";
import { Button } from "@mui/material";
import { changeData, deleteTodo, sendTodoProcess } from "../../fetch";
import { MainContext } from "../../App";
import Modal from "../Modal";
import { useContext } from "react";
function OneTaskComponent({ el }) {
  const [modal, setModal] = useState(false);
  const { setObj } = useContext(MainContext);
  const changeCheked = async (arg) => {
    const object = { ...arg, type: !arg.type };
    console.log(object);
    const obj1 = await changeData(object);
    console.log(obj1);

    setObj(obj1);
  };

  const deleted = async (arg) => {
    const response = await deleteTodo(arg);
    setObj(response);
  };
  const exitTodo = async (arg) => {
    const response = await sendTodoProcess(arg);
    setObj(response);
  };
  return (
    <div className={el.type ? "active" : "noActive"}>
      <p className="todoName">
        {el.name}
        <input
          type="checkbox"
          checked={el.type}
          onClick={() => changeCheked(el)}
          onChange={() => {}}
        />
      </p>
      <p>
        <Button
          className="btnLarge"
          variant="contained"
          onClick={() => setModal(!modal)}
        >
          See more
        </Button>
      </p>
      <p className="btns">
        <Button
          className="btn"
          variant="contained"
          onClick={() => {
            exitTodo(el);
          }}
        >
          Run
        </Button>
        <Button
          className="btn"
          variant="contained"
          disabled={el.type}
          onClick={() => {
            deleted(el);
          }}
        >
          Delete
        </Button>
      </p>
      {el.type && <p className="important">important</p>}
      {modal && <Modal el={el} setModal={setModal} modal={modal} />}
    </div>
  );
}

export default OneTaskComponent;
