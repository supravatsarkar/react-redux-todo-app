import { useAppSelector } from "@/redux/hook";
import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";
import React, { useEffect } from "react";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const [filterDate, setFilterDate] = React.useState(todos);
  useEffect(() => {
    {
      setFilterDate(todos);
    }
  }, [todos]);
  console.log("todos", todos);
  return (
    <div>
      <div className="flex justify-between items-center mb-4 ">
        <AddTodoModal />
        <TodoFilter setFilterDate={setFilterDate} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-3 space-y-2">
        <div>
          {filterDate.length === 0 && (
            <div className="bg-slate-100 p-3 rounded-xl flex justify-center items-center text-2xl font-bold">
              <p>There is no task pending</p>
            </div>
          )}
        </div>
        {filterDate.map((item) => (
          <TodoCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
