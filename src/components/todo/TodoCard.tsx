// import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
// import { removeTodo, toggleTodo } from "@/redux/feature/todoSlice";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import { UpdateTodoModal } from "./UpdateTodoModal";

type TTodoCardProps = {
  _id: string;
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
};

const TodoCard = ({
  _id,
  id,
  title,
  description,
  priority,
  isCompleted,
}: TTodoCardProps) => {
  console.log("data inside todo card", {
    _id,
    id,
    title,
    description,
    priority,
    isCompleted,
  });
  const [updateTodo, { isError, isLoading, data }] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  console.log("update todo RTK res", { isError, isLoading, data });
  const toggleTodoToDb = (_id: string) => {
    const option = {
      _id: _id,
      data: {
        _id,
        id,
        title,
        description,
        priority,
        isCompleted: !isCompleted,
      },
    };
    updateTodo(option);
  };
  const deleteTodoFromDb = (_id: string) => {
    deleteTodo(_id);
  };
  // const dispatch = useAppDispatch();
  return (
    <div className="bg-slate-100 p-3 rounded-lg flex justify-between items-center">
      <input
        className="mr-3"
        onChange={() => toggleTodoToDb(_id)}
        type="checkbox"
        name="task-completed"
        id="task-completed"
        defaultChecked={isCompleted}
      />
      <p className="font-semibold flex-1">{title}</p>
      <div className="flex-1 flex align-middle items-center">
        <div
          className={`size-3  rounded-lg mr-2 
        ${
          priority?.toLowerCase() === "high"
            ? "bg-red-500"
            : priority?.toLowerCase() === "medium"
            ? "bg-yellow-500"
            : "bg-green-500"
        }`}
        ></div>
        <p className="font-semibold">{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="font-semibold text-green-500">Done</p>
        ) : (
          <p className="font-semibold text-red-500">Pending</p>
        )}
      </div>

      <p className="flex-[2]">{description}</p>
      <div className="space-x-3">
        <Button onClick={() => deleteTodoFromDb(_id)} className="bg-red-500">
          <svg
            className="size-5"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </Button>
        <UpdateTodoModal
          todo={{ _id, id, title, description, priority, isCompleted }}
        />
      </div>
    </div>
  );
};

export default TodoCard;
