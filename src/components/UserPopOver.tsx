import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import UserIcon from "./Icons/UserIcon";

export default function UserPopOver() {
  return (
    <Popover>
      <PopoverButton
        className={
          "cursor-pointer items-center gap-1 border py-2 px-3 rounded-lg hover:bg-black/85 transition-all duration-150 bg-black text-white flex outline-none"
        }
      >
        <UserIcon /> {localStorage.getItem("user")}
      </PopoverButton>
      <PopoverPanel anchor="top" className="flex flex-col">
        <div
          className="cursor-pointer w-22 py-2 border px-5 text-white rounded-md  bg-black"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            location.reload();
          }}
        >
          Logout
        </div>
        <div
          className="cursor-pointer py-2 border px-5 text-white rounded-md  bg-black"
          onClick={() => {}}
        >
          <a
            href={`http://localhost:3000/api/v1/brain/${localStorage.getItem(
              "shareableLink"
            )}`}
            target="_blank"
          >
            Shareable Link
          </a>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
