import { createContext, useReducer, useState } from "react";

export const Todocontext = createContext({
  todoitems: [],
  addnewitem: () => {},
  deletetodo: () => {},
});
function reducer(curr_item, action) {
  let new_item = curr_item;
  if (action.type === "NEW_ITEM") {
    if(action.payload.text&&action.payload.duedate)
    {
      new_item = [
        ...curr_item,
        {
          text: action.payload.text,
          duedate: action.payload.duedate,
          id: action.payload.id,
        },
      ];
    }
  
  } else if (action.type === "DELETE_ITEM") {
    new_item = curr_item.filter((item) => item.id !== action.payload.id);
  }
  return new_item;
}
const TodoContextProvider = ({ children }) => {
  const [todo_items, dispatch] = useReducer(reducer, []);
  const [id_now, setid] = useState(1);

  const handlenewitem = (itemName, itemDate) => {
    const newitemaction = {
      type: "NEW_ITEM",
      payload: {
        text: itemName,
        duedate: itemDate,
        id: id_now,
      },
    };
    dispatch(newitemaction);
    setid(id_now + 1);
  };

  const deletetodo = (idpassed) => {
    const deleteitemaction = {
      type: "DELETE_ITEM",
      payload: {
        id: idpassed,
      },
    };
    dispatch(deleteitemaction);
  };
  return (
    <Todocontext.Provider
      value={{
        todo_items,
        addnewitem: handlenewitem,
        deletetodo: deletetodo,
      }}
    >
      {children}
    </Todocontext.Provider>
  );
};
export default TodoContextProvider;
