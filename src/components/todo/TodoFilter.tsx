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
import { useAppSelector } from "@/redux/hook";
import { TTodo } from "@/redux/feature/todoSlice";
type TTodoFilterProps = {
  setFilterDate: React.Dispatch<React.SetStateAction<TTodo[]>>;
};
export function TodoFilter({ setFilterDate }: TTodoFilterProps) {
  // const [position, setPosition] = React.useState("medium");
  // const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todos);
  const handleFilter = (value: string) => {
    // dispatch(filterTodo(value));
    console.log({ value });
    if (value !== "all") {
      const newFilterDate = todos.filter(
        (item) => item.priority.toLowerCase() === value.toLowerCase()
      );
      setFilterDate(newFilterDate);
    } else {
      setFilterDate(todos);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary-gradient ">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="" onValueChange={(v) => handleFilter(v)}>
          <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
