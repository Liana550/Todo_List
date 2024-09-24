import express from "express";
import todoArray from "../data.mjs";
const processListRouter = express.Router();
processListRouter.post("/", (req, res) => {
  const todo = req.body;
  todoArray.dataList = todoArray.dataList.filter((el) => el.id !== todo.id);
  todoArray.proList.push(todo);
  res.send(todo);
});
export default processListRouter;
