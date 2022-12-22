import React, { useState } from "react";
import AddNote from "./AddNote";
import NewNote from "./NewNote";
import Notes from "./Notes";

function MainContent() {
    const [addNote , setAddNote] = useState(false)

    const setNote = () => {
        setAddNote(true)
    }
    const closeNote = () => {
        setAddNote(false)
    }
  return (
    <div className="flex flex-col h-[90vh] bg-[rgba(32,33,36,1)] text-white border-l-[#323438] border-l-2 pt-5  w-full items-center">
      {!addNote && <AddNote setNote={setNote}/>}
      {addNote && <NewNote closeNote={closeNote}/>}
      <Notes />
    </div>
  );
}

export default MainContent;
