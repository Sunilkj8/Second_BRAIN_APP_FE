import React from "react";
import TwitterIcon from "./Icons/TwitterIcon";
import VideoIcon from "./Icons/VideoIcon";
import DocumentIcon from "./Icons/DocumentIcon";
import LinkIcon from "./Icons/LinkIcon";
import TagIcon from "./Icons/TagIcon";
import BrainIcon from "./Icons/BrainIcon";
import UserIcon from "./Icons/UserIcon";
import MyModal from "./Dialog";
const Socials = [
  { icon: <TwitterIcon />, iconText: "Tweets" },
  { icon: <VideoIcon />, iconText: "Videos" },
  { icon: <DocumentIcon />, iconText: "Documents" },
  { icon: <LinkIcon />, iconText: "Links" },
  { icon: <TagIcon />, iconText: "Tags" },
];
const SideBar = () => {
  return (
    <div className="h-screen flex   flex-col bg-white gap-5 shadow-sm ">
      {" "}
      <div className={"  flex gap-2  px-2 items-center py-5 w-60 "}>
        <BrainIcon />
        <span className="text-xl font-semibold"> Second Brain</span>
      </div>
      <div className="flex flex-col gap-5">
        {Socials.map((elem): any => {
          return (
            <div className="  px-5 hover:text-black transition flex items-center gap-2 text-gray-600 cursor-pointer w-40">
              {elem.icon} <span>{elem.iconText}</span>
            </div>
          );
        })}
        <div className=" flex px-4 mt-50  items-center gap-2">
           
          <span><MyModal/> </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
