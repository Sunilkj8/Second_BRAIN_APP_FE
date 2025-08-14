import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useContext, useRef, useState } from "react";
import UserIcon from "./Icons/UserIcon";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ButtonComp from "./Button";
import LoginSignupTab from "./TabHeadless";
import { IsLoginClicked } from "../Contexts/LoginContext";
import axios from "axios";
import UserPopOver from "./UserPopOver";
export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  // const [token, setToken] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  //@ts-ignore
  const { isLoginClicked, setIsLoginClicked } = useContext(IsLoginClicked);

  async function getUserInfo() {
    if (isLoginClicked === true) {
      try {
        const res = await axios.post("http://localhost:3000/api/v1/signin", {
          loginInfo,
        });
        // console.log(res.data.token);
        // setToken(res.data.token);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.username);

        location.reload();
      } catch (error) {
        console.log("Invalid Credentials");
        setLoginMessage("Wrong Email Or Password");
      }
    } else {
      try {
        const res = await axios.post("http://localhost:3000/api/v1/signup", {
          loginInfo,
        });
        // console.log(res.data);
        setLoginMessage(res.data.message);
        console.log("User signed Up");
      } catch (error) {
        setLoginMessage(
          "Password Should Contain atleast one special,one Uppercase,One Lowercase character"
        );
      }
    }
  }

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  // console.log(token);
  return (
    <>
      {localStorage.getItem("token") ? (
        <div className="flex gap-1 ">
          {/* <UserIcon /> */}
          <UserPopOver />
        </div>
      ) : (
        <>
          <Button
            onClick={open}
            className="rounded-md bg-black items-center  px-4 py-2 text-sm font-medium text-white transition duration-75 hover:bg-gray-800 flex gap-2 cursor-pointer"
          >
            <UserIcon /> <span> Login / Signup</span>
          </Button>
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
                  className="w-full max-w-md rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(105%)] data-closed:opacity-0"
                >
                  <DialogTitle className="text-xl font-medium text-center  text-white">
                    <LoginSignupTab />
                  </DialogTitle>
                  <p className="mt-5 flex flex-col gap-5 text-sm/6 text-white">
                    <input
                      onChange={(e) => {
                        //@ts-ignore
                        const { value, name } = e.target;
                        setLoginInfo((prevVal) => {
                          return { ...prevVal, [name]: value };
                        });
                      }}
                      value={loginInfo.username}
                      autoComplete="off"
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="border-none bg-white rounded-md outline-none text-black px-2 h-9"
                    />
                    <input
                      onChange={(e) => {
                        //@ts-ignore
                        const { value, name } = e.target;
                        setLoginInfo((prevVal) => {
                          return { ...prevVal, [name]: value };
                        });
                      }}
                      value={loginInfo.password}
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="border-none bg-white rounded-md outline-none text-black px-2 h-9"
                    />
                    <div className="flex items-center justify-center">
                      <ButtonComp
                        OnClick={() => {
                          console.log(loginInfo);
                          getUserInfo();
                          setLoginInfo({ username: "", password: "" });
                        }}
                        size="md"
                        variant="primary"
                        text="Submit"
                      />
                    </div>
                    <span className="text-center  text-xl">
                      {loginMessage ? "! " + loginMessage : ""}
                    </span>
                  </p>
                  <div className="mt-4">
                    {/* <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button> */}
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </>
      )}
    </>
  );
}
