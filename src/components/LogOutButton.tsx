"use client";
import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { logOutAction } from "@/actions/user";

export const LogOutButton = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLogOut = async () => {
    console.log("logging out");
    setLoading(true);
    const {errorMessage} =await logOutAction();
    if (!errorMessage) {
      toast({
        title: "Logged out",
        description: "you have been successfully logged out",
        variant: "success",
      });
      router.push("/");
    } else {
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
    setLoading(false);
  };
  return (
    <Button
      variant="outline"
      className="w-24"
      disabled={loading}
      onClick={handleLogOut}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
};
