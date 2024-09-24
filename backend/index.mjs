import express from "express";
import morgan from "morgan";
import cors from "cors";
import testListRouter from "./routs/testList.mjs";
import processListRouter from "./routs/processList.mjs";
import finishListRouter from "./routs/finishList.mjs";
import todoListRouter from "./routs/todoList.mjs";
const app = express();
const PORT = 5000;

app.use(morgan("short"));
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use("/todoList", todoListRouter);
app.use("/processList", processListRouter);
app.use("/testList", testListRouter);
app.use("/finishList", finishListRouter);

app.listen(PORT, () => {
  console.log("server started");
});
