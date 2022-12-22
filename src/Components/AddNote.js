import {
  CheckCircleIcon,
  PaintBrushIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function AddNote(props) {
  return (
    <div className="flex justify-center items-center w-[95vw] h-[20%]">
    <div className="w-[95%] md:w-2/4 lg:w-2/4 flex focus:outline-none bg-[rgba(32,33,36,1)] border-[#93979f] border-[1px] p-1 shadow-lg rounded-2xl justify-between items-center">
      <input
        type="text"
        placeholder="Add a new note"
        className=" h-12 pl-5 text-xl focus:underline underline-offset-8 w-[60%] focus:outline-none bg-[rgba(32,33,36,1)]"
        onClick={props.setNote}
      ></input>
      <div className="flex items-center space-x-5">
        <CheckCircleIcon className="h-7" />
        <PaintBrushIcon className="h-7" />
        <PhotoIcon className="h-7 pr-5" />
      </div>
    </div>
    </div>
  );
}

export default AddNote;
