import { useContext } from "react";
import { Todocontext } from "../store/todoitems_store";

const Nullitems = () => {
  const {todo_items} = useContext(Todocontext);

  if (todo_items.length == 0) {
    return (
      <>
        <p className="nullitem">No Todos Remaining :-D</p>
      </>
    );
  }
};
export default Nullitems;
