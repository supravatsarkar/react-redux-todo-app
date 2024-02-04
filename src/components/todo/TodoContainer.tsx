import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 ">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-3 space-y-2">
        <div>
          {/* <div className="bg-slate-100 p-3 rounded-xl flex justify-center items-center text-2xl font-bold">
            <p>There is no task pending</p>
          </div> */}
        </div>
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
