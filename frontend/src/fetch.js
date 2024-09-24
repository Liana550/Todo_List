import instance from "./api";
async function getData() {
  try {
    const response = await instance("todoList");
    if (response.status === 200 && response.status < 300) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}
async function changeData(arg) {
  try {
    const config = {
      method: "put",
      url: `todoList/${arg.id}`,
      data: arg,
    };
    const { data } = await instance(config);

    return data;
  } catch (error) {
    console.log(error);
  }
}
async function sendTodo(arg) {
  try {
    const config = {
      method: "POST",
      url: "todoList",
      data: arg,
    };
    const { data } = await instance(config);
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function sendTodoProcess(arg) {
  try {
    const config = {
      method: "POST",
      url: "processList",
      data: arg,
    };
    const { data } = await instance(config);
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function sendTodoTest(arg) {
  try {
    const config = {
      method: "POST",
      url: "testList",
      data: arg,
    };
    const { data } = await instance(config);
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function sendTodoFinish(arg) {
  try {
    const config = {
      method: "POST",
      url: "finishList",
      data: arg,
    };
    const { data } = await instance(config);
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function deleteTodo(arg) {
  try {
    const config = {
      method: "DELETE",
      url: `todoList/${arg.id}`,
    };
    const { data } = await instance(config);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export {
  getData,
  changeData,
  sendTodo,
  deleteTodo,
  sendTodoProcess,
  sendTodoTest,
  sendTodoFinish,
};
