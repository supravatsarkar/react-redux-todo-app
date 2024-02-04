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

export function TodoFilter() {
  const [position, setPosition] = React.useState("medium");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary-gradient ">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
