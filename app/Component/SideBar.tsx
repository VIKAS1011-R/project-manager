import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import LogoutIcon from "@mui/icons-material/Logout";

function SideBar() {
  return (
    <div className="w-[97px] h-screen py-8 bg-white flex flex-col items-center justify-between border-r">
      <Logo />
      <Menu />
      <Profile />
    </div>
  );
}

function Profile() {
  return <div className="w-7 h-7 bg-orange-600 rounded-md"></div>;
}

function Menu() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <BorderAllIcon
        className="text-orange-600 cursor-pointer"
        sx={{ fontSize: "27px" }}
      />

      <SplitscreenIcon
        className="text-slate-300 cursor-pointer"
        sx={{ fontSize: "25px" }}
      />
      <LogoutIcon
        className="text-slate-300 cursor-pointer"
        sx={{ fontSize: "25px" }}
      />
    </div>
  );
}

function Logo() {
  return (
    <div className=" flex items-center justify-center">
      <TaskAltIcon
        className="text-orange-600 font-bold"
        sx={{ fontSize: "41px" }}
      />
    </div>
  );
}

export default SideBar;
