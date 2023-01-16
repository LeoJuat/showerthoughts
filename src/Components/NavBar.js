import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-5/6 py-10 mx-auto background">
      <ul className="flex items-center text-[#E85A4F] justify-between">
        <Link
          to="/"
          className="text-4xl font-extrabold tracking-wide duration-200 hover:scale-110"
        >
          Logo
        </Link>
        <div className="flex items-center gap-10">
          <Link
            to="/explore"
            className="font-semibold duration-200 hover:scale-110"
          >
            Explore
          </Link>
          <Link
            to="/notifications"
            className="font-semibold duration-200 hover:scale-110"
          >
            Notifications
          </Link>
          <Link
            to="/messages"
            className="font-semibold duration-200 hover:scale-110"
          >
            Messages
          </Link>
          <Link to="/profile" className="duration-200 hover:scale-110">
            <Avatar />
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
