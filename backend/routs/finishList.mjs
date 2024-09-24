import express from "express";
import todoArray from "../data.mjs";
const finishListRouter = express.Router();
finishListRouter.post("/", (req, res) => {
  const todo = req.body;
  todoArray.testList = todoArray.testList.filter((el) => el.id !== todo.id);
  todoArray.finishList.push(todo);
  res.send(todo);
});
export default finishListRouter;
