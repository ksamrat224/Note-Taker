"use client";
import { Note } from "@prisma/client";
import React from "react";
import { SidebarGroupContent as SidebarGroupContentShadCN } from "./ui/sidebar";
type Props = {
  notes: Note[];
};

export const SidebarGroupContent = ({ notes }: Props) => {
  console.log(notes);
  return <SidebarGroupContentShadCN>Your notes here</SidebarGroupContentShadCN>;
};
