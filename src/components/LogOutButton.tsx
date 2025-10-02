"use client";
import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const LogOutButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLogOut = async () => {
    console.log("logging out");
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMessage = null;
    if (!errorMessage) {
      toast.success("Logged Out", {
        description: "You have been logged out successfully",
      });
      router.push("/");
    } else {
      toast.error("Error", {
        description: errorMessage,
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
