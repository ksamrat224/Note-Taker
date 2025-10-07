"use client"
import { Note } from '@prisma/client'
import React from 'react'

type Props = {
    notes: Note[]
}

export const SidebarGroupContent = ({notes}:Props) => {
    console.log(notes);
  return (
    <div>Your notes here</div>
  )
}
