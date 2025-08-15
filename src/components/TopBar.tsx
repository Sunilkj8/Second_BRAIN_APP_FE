import React from "react";
import PlusIcon from "../icons/plusIcon";
import ShareIcon from "../icons/shareIcon";
import ButtonComp from "./Button";
import AddContent from "./AddContent";
import axios from "axios";

const TopBar = () => {
  return (
    <div className="flex h-15 items-center  mt-8     w-[78vw] justify-between">
      <div className=" px-5 text-2xl  tracking-tighter">All Notes</div>

      <div className="flex px-5 gap-2 ">
        <ButtonComp
          text={
            localStorage.getItem("shareableLink") ? "Unshare" : "Share"
          }
          variant="secondary"
          OnClick={async () => {
            if (!localStorage.getItem("shareableLink")) {
              try {
                const res = await axios.post(
                  "http://localhost:3000/api/v1/brain/share",
                  {
                    share: true,
                  },
                  {
                    headers: { authorization: localStorage.getItem("token") },
                  }
                );

                console.log(res.data.Share);
                localStorage.setItem("shareableLink", res.data.Share);
              } catch (e) {
                console.log("Brain is already Shared");
              }
            } else {
              try {
                const res = await axios.post(
                  "http://localhost:3000/api/v1/brain/share",
                  { share: false },
                  { headers: { authorization: localStorage.getItem("token") } }
                );
                localStorage.removeItem("shareableLink");
                console.log(res.data);
              } catch (error) {
                console.log(error);
              }
            }
            location.reload();
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
