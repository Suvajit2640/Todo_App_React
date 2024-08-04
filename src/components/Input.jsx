import React, { useContext, useState } from "react";
import { RiTodoLine } from "react-icons/ri";
import { Todocontext } from "../store/todoitems_store";

const TodoInput = () => {
  const {addnewitem}=useContext(Todocontext)
  const [text, setText] = useState("");
  const [duedate, setDueDate] = useState("");

  const textinput = (event) => {
    setText(event.target.value);
  };

  const dateinput = (event) => {
    setDueDate(event.target.value);
  };

  const additem = () => {
    addnewitem(text, duedate);
    setText("");
    setDueDate("");
  };

  return (
    <>
      <div className="col-6 input">
        <input
          type="text"
          placeholder="Enter Todo Here"
          onChange={textinput}
          value={text}
        />
      </div>
      <div className="col-4 input">
        <input type="date" onChange={dateinput} value={duedate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn  btn-primary"
          onClick={additem}
        >
       <RiTodoLine />
        </button>
      </div>
    </>
  );
};

export default TodoInput;
