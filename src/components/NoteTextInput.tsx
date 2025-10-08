"use client";
import React from "react";

type Props = {
  noteId: string;
  startingNoteText: string;
};
export const NoteTextInput = ({ noteId, startingNoteText }: Props) => {
  console.log(noteId, startingNoteText);
  return <div>NotetextInput</div>;
};
