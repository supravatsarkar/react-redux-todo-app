"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useAppSelector } from "@/redux/hook";
// import { TTodo } from "@/redux/feature/todoSlice";
export type TTodoFilterProps = {
  setPriority: React.Dispatch<React.SetStateAction<string>>;
};
export function TodoFilter({ setPriority }: TTodoFilterProps) {
  // const [position, setPosition] = React.useState("medium");
  // const dispatch = useAppDispatch();
  // const { todos } = useAppSelector((state) => state.todos);
  // const handleFilter = (value: string) => {
  //   // dispatch(filterTodo(value));
  //   console.log({ value });
  //   // if (value !== "all") {
  //   //   const newFilterDate = todos.filter(
  //   //     (item) => item.priority.toLowerCase() === value.toLowerCase()
  //   //   );
  //   //   setFilterData(newFilterDate);
  //   // } else {
  //   //   setFilterData(todos);
  //   // }
  //   setPriority(value);
  // };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary-gradient ">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="" onValueChange={(v) => setPriority(v)}>
          <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
