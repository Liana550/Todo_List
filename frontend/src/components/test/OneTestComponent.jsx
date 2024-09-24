import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import Modal from "../Modal";
import { sendTodoFinish } from "../../fetch";
import { MainContext } from "../../App";
function OneTestComponent({ el }) {
  const [modal, setModal] = useState(false);
  const { setObj } = useContext(MainContext);
  const sendFinish = async (arg) => {
    const response = await sendTodoFinish(arg);
    setObj(response);
  };

  return (
    <div className={el.type ? "active" : "noActive"}>
      <p className="todoName">{el.name}</p>
      <p className="btns">
        <Button
          className="btn"
          variant="contained"
          onClick={() => {
            sendFinish(el);
          }}
        >
          End
        </Button>
        <Button
          className="btnLarge"
          variant="contained"
          onClick={() => setModal(!modal)}
        >
          See more
        </Button>
      </p>
      {el.type && <p className="important">important</p>}
      {modal && <Modal el={el} setModal={setModal} modal={modal} />}
    </div>
  );
}

export default OneTestComponent;
