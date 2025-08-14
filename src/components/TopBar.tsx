import React from "react";
import PlusIcon from "../icons/plusIcon";
import ShareIcon from "../icons/shareIcon";
import ButtonComp from "./Button";
import AddContent from "./AddContent";

const TopBar = () => {
  return (
    <div className="flex h-15 items-center  mt-8     w-[78vw] justify-between">
      <div className=" px-5 text-2xl  tracking-tighter">All Notes</div>

      <div className="flex px-5 gap-2 ">
        <ButtonComp
          text="Share"
          variant="secondary"
          OnClick={() => {
            console.log("clicked");
          }}
          size="md"
          startIcon={<ShareIcon size="md" />}
        />

        <AddContent />
      </div>
    </div>
  );
};

export default TopBar;
