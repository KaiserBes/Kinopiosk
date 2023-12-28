import React, { useEffect, useState } from "react";
import Form from "./Form";
import Status from "./Status";
import Item from "./Item";
import AlertMessage from "../AlertMessage/AlertMessage";

const Todo = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleOpen = () => {
    setToggle(true);
  };
  const handleClose = () => {
    setToggle(false);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    let time;
    if (data.length > 0) {
      console.log("sfcsfcsf");
      time = setTimeout(handleClose, 2000);
    }
    return () => {
      clearTimeout(time);
    };
  }, [data]);

  const createTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: new Date().toISOString(),
      name: name,
      status: "new",
      date: new Date(),
    };
    setData([...data, todo]);
    setName("");
    handleOpen();
  };

  const doneTodo = (id) => {
    const changeState = data.map((el) => {
      if (id === el.id) {
        if (el.status === "new") {
          return { ...el, status: "processing" };
        } else if (el.status === "processing") {
          return { ...el, status: "completed" };
        } else {
          return { ...el, status: "new" };
        }
      }
      return el;
    });
    setData(changeState);
  };

  const deleteTodo = (id) => {
    const updatedData = data.filter((todo) => todo.id !== id);
    setData(updatedData);
  };

  const editTodo = (id, editedMessage) => {
    const updatedData = data.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: editedMessage };
      }
      return todo;
    });
    setData(updatedData);
  };

  const items = data.map((todo, index) => (
    <Item
      key={todo.id}
      todo={todo}
      index={index}
      doneTodo={doneTodo}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
    />
  ));

  return (
    <section>
      <h2>Todo List</h2>
      <Form
        name={name}
        handleName={handleName}
        createTodo={createTodo}
        toggle={toggle}
      />

      <Status data={data} />
      {items}
      <AlertMessage state={data.length} title="Todo" conditionNumber={0} />
    </section>
  );
};

export default Todo;
