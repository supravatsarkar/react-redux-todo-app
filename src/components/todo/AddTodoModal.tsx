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
import { addTodo } from "@/redux/feature/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import SelectPriority from "./SelectPriority";
import { useAddTodoMutation } from "@/redux/api/api";

export function AddTodoModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  // For local state management
  // const dispatch = useAppDispatch();

  const [setTodo, { isLoading, data, isError, error }] = useAddTodoMutation();
  console.log({ error, isError, isLoading, data });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("title, description=>", title, description);
    const id = Math.random().toString(36).substring(2);
    console.log("id=>", id);
    const newTodo = { id, title, description, priority, isCompleted: false };

    // For server sync state manage
    setTodo(newTodo);

    // For local state management
    // dispatch(addTodo(newTodo))

    // fetch("http://localhost:5000/todos", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     ...newTodo,
    //     createdAt: new Date(),
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     dispatch(addTodo(newTodo));
    //   })
    //   .catch((error) => console.error(error));
  };
  const handleSelectPriority = (value: string) => {
    setPriority(value);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient ">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Submit task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <SelectPriority
                id="priority"
                handleSelectPriority={handleSelectPriority}
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
