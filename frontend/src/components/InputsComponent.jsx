import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { sendTodo } from "../fetch";
import { MainContext } from "../App";
function InputsComponent() {
  const { setObj } = useContext(MainContext);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const [test, setTest] = useState(false);
  async function addTodo() {
    if (name === "" || about === "" || start === "" || finish === "") {
      setTest(true);
    } else {
      const obj = {
        name,
        about,
        start,
        finish,
      };
      const response = await sendTodo(obj);
      setObj(response);
      setName("");
      setAbout("");
      setStart("");
      setFinish("");
    }

    setTimeout(() => setTest(false), 1000);
  }
  return (
    <>
      <div className="content">
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="About"
          variant="filled"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Start"
          variant="filled"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Finish"
          variant="filled"
          value={finish}
          onChange={(e) => setFinish(e.target.value)}
        />

        <Button variant="contained" className="btnLarge1" onClick={addTodo}>
          Add
        </Button>
      </div>
      {test && <p className="TextActive">please enter all</p>}
    </>
  );
}

export default InputsComponent;
