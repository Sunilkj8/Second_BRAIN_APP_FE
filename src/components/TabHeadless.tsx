import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useContext } from "react";
import { IsLoginClicked } from "../Contexts/LoginContext";

export default function LoginSignupTab() {
    //@ts-ignore
  const { isLoginClicked, setIsLoginClicked } = useContext(IsLoginClicked);
  return (
    <TabGroup>
      <TabList className={"flex items-center gap-3"}>
        <Tab
          onClick={() => {
            setIsLoginClicked(true);
          }}
          key={"Login"}
          className="rounded-md px-3 py-1 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white/10 data-hover:bg-white/15 data-hover:cursor-pointer data-selected:bg-white data-selected:data-hover:bg-white  bg-black  border w-1/2 data-selected:text-black  "
        >
          {" "}
          Login
        </Tab>
        <Tab
          onClick={() => {
            setIsLoginClicked(false);
          }}
          key={"Signup"}
          className="rounded-md px-3 py-1 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white/10 data-hover:bg-white/15 data-hover:cursor-pointer data-selected:bg-white data-selected:data-hover:bg-white  bg-black  border w-1/2 data-selected:text-black  "
        >
          {" "}
          Signup
        </Tab>
      </TabList>
      {/* <TabPanels className={"mt-4"}>
        <TabPanel>Login</TabPanel>
        <TabPanel>Signup</TabPanel>
      </TabPanels> */}
    </TabGroup>
  );
}
