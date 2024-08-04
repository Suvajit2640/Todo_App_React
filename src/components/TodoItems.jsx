import { useContext } from "react";
import TodoItem from "./TodoItem";
import { Todocontext } from "../store/todoitems_store";

const Todo_items = () => {
  const {todo_items} = useContext(Todocontext);
  return (
    <>
      {todo_items.map((item, index) => (
        <TodoItem
          todoName={item.text}
          todoDate={item.duedate}
          key={item.id}
          id={item.id}
       
        ></TodoItem>
      ))}
    </>
  );
};
export default Todo_items;
