import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import SelectPriority from "./SelectPriority";
import { useUpdateTodoMutation } from "@/redux/api/api";
import { TTodo } from "@/redux/feature/todoSlice";

export function UpdateTodoModal({ todo }: { todo: Partial<TTodo> }) {
  console.log("update model todo=>", todo);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    todo.description
  );
  const [updatedPriority, setUpdatedPriority] = useState(todo.priority);

  // For local state management
  // const dispatch = useAppDispatch();

  const [updateTodo, { isLoading, data, isError, error }] =
    useUpdateTodoMutation();
  console.log({ error, isError, isLoading, data });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updateData = {
      title: updatedTitle,
      description: updatedDescription,
      priority: updatedPriority,
      isCompleted: false,
    };
    const option = {
      _id: todo._id,
      data: updateData,
    };

    // For server sync state manage
    updateTodo(option);

    // For local state management
    // dispatch(addTodo(newTodo))
  };
  const handleSelectPriority = (value: string) => {
    setUpdatedPriority(value);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#753a88]">
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            ></path>
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
          <DialogDescription>
            Edit task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                onBlur={(e) => setUpdatedTitle(e.target.value)}
                id="title"
                className="col-span-3"
                defaultValue={todo?.title}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setUpdatedDescription(e.target.value)}
                id="description"
                className="col-span-3"
                defaultValue={todo?.description}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <SelectPriority
                id="priority"
                handleSelectPriority={handleSelectPriority}
                defaultValue={todo?.priority as string}
              ></SelectPriority>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
