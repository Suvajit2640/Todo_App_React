import Title from "./components/Title";
import Nullitems from "./components/Nullitems";
import Todo_items from "./components/TodoItems";
import TodoInput from "./components/Input";
import React, { useReducer, useState } from "react";
import TodoContextProvider from "./store/todoitems_store";
import "./App.css";

function App() {
  return (
    <>
      <TodoContextProvider>
          <Title />
        <div className="container">
          <div className="item_container">
            <div className="row m-p">
              <TodoInput />
            </div>
            <Nullitems />
            <Todo_items />
          </div>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;

// const intial_todo_items = [];
// const [idnow, setid] = useState(1);
// // console.log(todo_items)
// const [todo_items, setvalue] = useState(intial_todo_items);
// // const default_todo_items=[{text:"Buy Milk",duedate:"22/02/21",id:1}]

// const handlenewitem = (itemName, itemDate) => {
//   if (itemName && itemDate) {
//     const newitem = [
//       ...todo_items,
//       { text: itemName, duedate: itemDate, id: idnow },
//     ];
//     setvalue(newitem);
//     setid(idnow + 1);
//   }
// };
// const deletetodo = (idpassed) => {
//   // console.log("index", idpassed);

//   const newitem = todo_items.filter((item) => item.id !== idpassed);
//   setvalue(newitem);
// };
