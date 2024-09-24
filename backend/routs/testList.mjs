import express from "express";
import todoArray from "../data.mjs";
const testListRouter = express.Router();
testListRouter.post("/", (req, res) => {
  const todo = req.body;
  todoArray.proList = todoArray.proList.filter((el) => el.id !== todo.id);
  todoArray.testList.push(todo);
  res.send(todo);
});
export default testListRouter;
