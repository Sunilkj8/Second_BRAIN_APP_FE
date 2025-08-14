import React, { useContext, useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import ButtonComp from "./Button";
import PlusIcon from "../icons/plusIcon";
import axios from "axios";
export default function AddContent() {
  let [isOpen, setIsOpen] = useState(false);
  const [contentData, setContentData] = useState({
    title: "",
    link: "",
    description: "",
    type: "",
  });

  async function sendContent() {
    const res = await axios.post(
      "http://localhost:3000/api/v1/content",
      contentData,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    console.log(res.data);
    location.reload();
  }
  // const [token, setToken] = useState("");

  //@ts-ignore

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  // console.log(token);
  return (
    <>
      <ButtonComp
        text="Add Content"
        variant="primary"
        OnClick={() => {
          open();
        }}
        size="md"
        startIcon={<PlusIcon size="md" />}
      />

      <Dialog
        open={isOpen}
        as="div"
        className="relative  z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-3xl rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(105%)] data-closed:opacity-0"
            >
              <DialogTitle className="text-xl font-medium text-center  text-white">
                Add Content
              </DialogTitle>
              <div className="mt-5 flex flex-col gap-5 text-sm/6 text-white">
                <input
                  onChange={(e) => {
                    //@ts-ignore
                    const { value, name } = e.target;
                    setContentData((prevVal) => {
                      return { ...prevVal, [name]: value };
                    });
                  }}
                  name="title"
                  className="text-white py-2 px-4 rounded-md border outline-none "
                  placeholder="Title"
                  required
                  maxLength={20}
                />
                <input
                  onChange={(e) => {
                    //@ts-ignore
                    const { value, name } = e.target;
                    setContentData((prevVal) => {
                      return { ...prevVal, [name]: value };
                    });
                  }}
                  name="link"
                  className="text-white py-2 px-4 rounded-md border outline-none "
                  placeholder="Link"
                  required
                />
                <textarea
                  onChange={(e) => {
                    //@ts-ignore
                    const { value, name } = e.target;
                    setContentData((prevVal) => {
                      return { ...prevVal, [name]: value };
                    });
                  }}
                  name="description"
                  className="text-white  py-2 px-4 rounded-md border outline-none "
                  placeholder="Description"
                  required
                />

                <select
                  onChange={(e) => {
                    //@ts-ignore
                    const { value, name } = e.target;
                    setContentData((prevVal) => {
                      return { ...prevVal, [name]: value };
                    });
                  }}
                  name="type"
                  id=""
                  className="text-white bg-black p-3 border px-5 rounded-md outline-none "
                  required
                >
                  <option>Select Type</option>
                  <option value="Video">Video</option>
                  <option  value="Tweet">Tweet</option>
                  <option value="Document">Document</option>
                </select>

                <div className="flex items-center justify-center">
                  <ButtonComp
                    OnClick={() => {
                      sendContent();
                    }}
                    size="md"
                    variant="primary"
                    text="Submit"
                  />
                </div>
                <span className="text-center  text-xl"></span>
              </div>
              <div className="mt-4"></div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
