import {
  ArchiveBoxArrowDownIcon,
  BellIcon,
  LightBulbIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function Sidebar(props) {
  return (
    <>
      {props.showSidebar && (
        <div className="absolute flex h-[90vh] bg-[rgba(32,33,36,1)] w-[50vw] md:w-[15vw] lg:w-[10vw] justify-center pt-5 rounded-xl border-r-[1px] border-x-[#93979f]">
          <div className="flex flex-col w-[100%] items-center space-y-7 px-2">
            <div className="flex space-x-3">
              <LightBulbIcon className="h-5 text-[#93979f]" />
              <h3 className="text-lg text-white">Notes</h3>
            </div>
            <div className="flex space-x-3">
              <BellIcon className="h-5 text-[#93979f]" />
              <h3 className="text-lg text-white">Reminders</h3>
            </div>
            <div className="flex space-x-3">
              <PencilIcon className="h-5 text-[#93979f]" />
              <h3 className="text-lg text-white">Edit</h3>
            </div>
            <div className="flex space-x-3">
              <ArchiveBoxArrowDownIcon className="h-5 text-[#93979f]" />
              <h3 className="text-lg text-white">Archive</h3>
            </div>
            <div className="flex space-x-3">
              <TrashIcon className="h-5 text-[#93979f]" />
              <h3 className="text-lg text-white">Trash</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
