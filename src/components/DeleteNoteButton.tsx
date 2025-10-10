"use client"
import React from 'react'

type Props={
    noteId:string,
    deleteNoteLocally:(noteId:string)=>void;
}
export const DeleteNoteButton = ({noteId,deleteNoteLocally}:Props) => {
  return (
    <div>DeleteNoteButton</div>
  )
}
