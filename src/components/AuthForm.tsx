"use client";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type Props = {
  type: "login" | "signUp";
};

const AuthForm = ({ type }: Props) => {
  const isLoginForm = type === "login";
  const route = useRouter();
  const { toast } = require("sonner");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    console.log("form submitted");
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            disabled={isPending}
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            disabled={isPending}
            required
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-8">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Log In"
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="text-xs">
          {isLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            href={isLoginForm ? "/sign-up" : "/login"}
            className={
              '${isPending ? "pointer-events-none opacity-50" : ""} text-blue-500 hover:underline'
            }
          >
            {isLoginForm ? "Sign Up" : "Log In"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};
export default AuthForm;
