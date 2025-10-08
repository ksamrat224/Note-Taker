"use client";
import { useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import useNote from "@/hooks/useNote";
import { updateNoteAction } from "@/actions/notes";

type Props = {
  noteId: string;
  startingNoteText: string;
};
let updateTimeout: NodeJS.Timeout;
export const NoteTextInput = ({ noteId, startingNoteText }: Props) => {
  const noteIdParam = useSearchParams().get("noteId") || "";
  const { noteText, setNoteText } = useNote();

  useEffect(() => {
    if (noteIdParam === noteId) {
      setNoteText(startingNoteText);
    }
  }, [startingNoteText, noteIdParam, noteId, setNoteText]);

  const handleUpdateNote = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setNoteText(text);
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      updateNoteAction(noteId, text);
    }, 1000);
  };
  return (
    <Textarea
      value={noteText}
      onChange={handleUpdateNote}
      placeholder="Type your notes here.."
      className="custom-scrollbar placeholder:text-muted-foreground mb-4 h-full max-w-4xl resize-none border p-4 focus-visible:ring-0 focus-visible:ring-offset-0"
    />
  );
};
