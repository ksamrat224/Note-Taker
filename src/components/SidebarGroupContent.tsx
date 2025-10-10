"use client";
import { Note } from "@prisma/client";
import React, { useState } from "react";
import { SidebarGroupContent as SidebarGroupContentShadCN } from "./ui/sidebar";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
type Props = {
  notes: Note[];
};

export const SidebarGroupContent = ({ notes }: Props) => {
  const [searchText, setSearchText] = useState("");
  return (
    <SidebarGroupContentShadCN>
      <div className="relative flex items-center">
        <SearchIcon className="absolute left-2 size-2" />
        <Input
          className="bg-muted pl-8"
          placeholder="search your notes"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </SidebarGroupContentShadCN>
  );
};
