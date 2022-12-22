import React from 'react'
import Note from './Note'

function Notes() {
  return (
    <div className=' w-[100%] grid gap-2 grid-cols-1 grid-rows-none md:gap-3 md:grid-cols-3 lg:gap-4 lg:grid-cols-4 px-5 pt-5 overflow-y-scroll scrollbar-hide'>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
    </div>
  )
}

export default Notes

