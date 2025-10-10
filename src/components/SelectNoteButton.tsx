"use client"
import { Note } from '@prisma/client'
import React from 'react'

type Props={
  note:Note,
}
export const SelectNoteButton = ({note}:Props) => {
  return (
    <div>SelectNoteeButton</div>
  )
}
