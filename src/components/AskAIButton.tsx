"use client";
import { User } from "@supabase/supabase-js";
import React from "react";

type Props = {
  user: User|null;
};
export const AskAIButton = ({ user }: Props) => {
    console.log(user.email);
  return <div>AskAIButton</div>;
};
