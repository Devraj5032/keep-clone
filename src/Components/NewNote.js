import {
  ArchiveBoxArrowDownIcon,
  BellAlertIcon,
  EllipsisVerticalIcon,
  MapPinIcon,
  PhotoIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

const NewNote = (props) => {
  return (
    <div className="flex-col w-2/4 focus:outline-none bg-[rgba(32,33,36,1)] border-[#93979f] border-[1px] p-1 shadow-lg rounded-2xl justify-between items-center">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Title"
          className="h-12 pl-5 text-xl focus:underline underline-offset-8 w-[60%] focus:outline-none bg-[rgba(32,33,36,1)]"
        />
        <MapPinIcon className="h-7 text-[#93979f] pr-3" />
      </div>
      <div>
        <input
          type="text"
          placeholder="Take a Note"
          className="h-9 pl-5 text-lg focus:underline underline-offset-8 w-[100%] focus:outline-none bg-[rgba(32,33,36,1)]"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-9 pl-5 py-5">
          <BellAlertIcon className="h-4 text-[#93979f]" />
          <UserPlusIcon className="h-4 text-[#93979f]" />
          <PhotoIcon className="h-4 text-[#93979f]" />
          <ArchiveBoxArrowDownIcon className="h-4 text-[#93979f]" />
          <EllipsisVerticalIcon className="h-4 text-[#93979f]" />
        </div>
        <button className=" text-[#93979f] p-2 rounded-lg hover:bg-[#505256] items-center pr-3" onClick={props.closeNote}>Close</button>
      </div>
    </div>
  );
};

export default NewNote;
