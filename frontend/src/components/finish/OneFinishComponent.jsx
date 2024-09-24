import React, { useState } from "react";
import { Button } from "@mui/material";
import Modal from "../Modal";
function OneFinishComponent({ el }) {
  const [modal, setModal] = useState(false);
  return (
    // <div className={el.type ? "active" : "noActive"}>
    <div className="noActive">
      <p className="todoName">{el.name}</p>
      <Button
        className="btnLarge"
        variant="contained"
        onClick={() => setModal(!modal)}
      >
        See more
      </Button>
      {modal && <Modal el={el} setModal={setModal} modal={modal} />}
    </div>
  );
}

export default OneFinishComponent;
