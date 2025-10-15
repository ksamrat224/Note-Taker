"use client";
import { User } from "@supabase/supabase-js";
import React, { Fragment, useRef, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  user: User | null;
};
export const AskAIButton = ({ user }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [responses, setResponses] = useState<string[]>([]);
  const handleOnOpenChange = (isOpen: boolean) => {
    if (!user) {
      router.push("/login");
    } else {
      if (isOpen) {
        setQuestionText("");
        setQuestions([]);
        setResponses([]);
      }
      setOpen(isOpen);
    }
  };
  const textareaREf = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const handleInput = () => {
    const textarea = textareaREf.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  const handleClickInput = () => {
    textareaREf.current?.focus();
  };
  const handleSubmit = () => {
    console.log("submit");
  };
  const scrollToBottom = () => {
    contentRef.current?.scrollTo({
      top: contentRef.current.scrollHeight,
      behavior: "smooth",
    });
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleOnOpenChange}>
      <DialogTrigger asChild>
        <Button variant="secondary">Ask AI</Button>
      </DialogTrigger>
      <DialogContent
        className="custom-scrollbar flex h-[85vh] max-w-4xl flex-col overflow-y-auto"
        ref={contentRef}
      >
        <DialogHeader>
          <DialogTitle>Ask AI About Your Notes</DialogTitle>
          <DialogDescription>
            Our AI will answer any question you have about your notes.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex flex-col gap-8">
          {questions.map((question, index) => (
            <Fragment key={index}>
              <p className="bg-muted text-muted-foreground ml-auto max-w-[60%] rounded-md px-2 py-1 text-sm">
                {question}
              </p>
              {responses[index] && (
                <p
                  className="bot-response text-muted-foreground text-sm"
                  dangerouslySetInnerHTML={{ __html: responses[index] }}
                />
              )}
            </Fragment>
          ))}
          {isPending && <p className="animate-pulse text-sm">Thinking...</p>}
        </div>
        <div></div>
      </DialogContent>
    </Dialog>
  );
};
