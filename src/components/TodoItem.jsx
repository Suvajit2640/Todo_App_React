import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Todocontext } from "../store/todoitems_store";
function TodoItem({ todoName, todoDate, id }) {
  const { deletetodo } = useContext(Todocontext);
  return (
    <>
      <div className="row m-p todo-item">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              deletetodo(id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
