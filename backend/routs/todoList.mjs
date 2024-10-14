import express from "express";
import todoArray from "../data.mjs";
const todoListRouter = express.Router();
todoListRouter.get("/", (req, res) => {
  res.send({
    dataList: todoArray.dataList,
    proList: todoArray.proList,
    testList: todoArray.testList,
    finishList: todoArray.finishList,
  });
});
todoListRouter.post("/", (req, res) => {
  const todo = req.body;
  todo.id = Date.now() + "_" + Math.floor(Math.random() * 10000);
  todoArray.dataList.push(todo);
  res.send(todo);
});
todoListRouter.put("/:id", (req, res) => {
  const todoId = req.params;
  todoArray.dataList.map((el) =>
    el.id === req.body.id ? (el.type = req.body.type) : ""
  );

  res.send({ message: "ok" });
});

todoListRouter.delete("/:id", (req, res) => {
  const params = req.params;
  console.log(params);

  const todo = todoArray.dataList.find((el) => el.id === +params.id);
  todoArray.dataList = todoArray.dataList.filter((el) => el.id !== +params.id);
  res.send(todo);
});
export default todoListRouter;
