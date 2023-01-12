import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="py-10 w-5/6 mx-auto">
      <ul className="flex items-center text-[#03A9F4] justify-between">
        <Link to="/" className="hover:scale-110 duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="48"
            height="45"
          >
            <path
              fill="#03A9F4"
              d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
            />
          </svg>
        </Link>
        <div className="flex gap-10 items-center">
          <Link
            to="/explore"
            className="font-semibold hover:scale-110 duration-200"
          >
            Explore
          </Link>
          <Link
            to="/notifications"
            className="font-semibold hover:scale-110 duration-200"
          >
            Notifications
          </Link>
          <Link
            to="/messages"
            className="font-semibold hover:scale-110 duration-200"
          >
            Messages
          </Link>
          <Link to="/profile" className="hover:scale-110 duration-200">
            {/* <div className="outline outline-[#03A9F4] outline-2 rounded-3xl scale-75">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <path
                  fill="#03A9F4"
                  d="M24 8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 20c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
            </div> */}
            <Avatar />
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
