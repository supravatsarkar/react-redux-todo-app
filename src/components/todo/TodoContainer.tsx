// import { useAppSelector } from "@/redux/hook";
import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";
import React from "react";
import { useGetTodosQuery } from "@/redux/api/api";
import type { TTodo } from "@/redux/feature/todoSlice";

const TodoContainer = () => {
  // From local state
  // const { todos } = useAppSelector((state) => state.todos);

  // From state server
  // const todoArray: TTodo[] = [];
  const [priority, setPriority] = React.useState("");
  const {
    data: todos,
    error,
    isLoading,
  } = useGetTodosQuery(priority, {
    // pollingInterval: 1000,
    // refetchOnMountOrArgChange: 3,
  });
  console.log("get api error=>", error);

  // console.log("filterDate", filterData);
  // useEffect(() => {
  //   if (todos && todos.length) {
  //     setFilterData(todos);
  //   }
  // }, [todos]);
  console.log("isLoading,  todos", isLoading, todos);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-4 ">
        <AddTodoModal />
        <TodoFilter setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-3 space-y-2">
        <div>
          {todos.length === 0 && (
            <div className="bg-slate-100 p-3 rounded-xl flex justify-center items-center text-2xl font-bold">
              <p>There is no task pending</p>
            </div>
          )}
        </div>
        {todos.map((item: TTodo) => (
          <TodoCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
