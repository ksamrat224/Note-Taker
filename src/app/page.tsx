import { getUser } from "@/auth/server";
import { AskAIButton } from "@/components/AskAIButton";
import { NewNoteButton } from "@/components/NewNoteButton";
import { prisma } from "@/db/prisma";

import React from "react";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const HomePage = async ({ searchParams }: Props) => {
  const noteIdParam = (await searchParams).noteId;
  const user = await getUser();

  const noteId = Array.isArray(noteIdParam)
    ? noteIdParam![0]
    : noteIdParam || "";

  const note = await prisma.note.findUnique({
    where: { id: noteId, authorId: user?.id },
  });
  return (
    <div className="flex h-full flex-col items-center gap-4">
      <div className="flex w-full max-w-4xl justify-end gap-2">
        <AskAIButton user={user} />
        <NewNoteButton user={user} />
      </div>
      <NotetextInput noteId={noteId} startingNoteText={note?.text || ""} />
    </div>
  );
};
export default HomePage;
