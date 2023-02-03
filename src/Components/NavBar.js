import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="w-5/6 pt-10 mx-auto background">
      <div className="flex items-center justify-between py-8 border-b-2 border-[rgba(216,195,165,0.50)]">
        <Link
          to="/"
          className="text-4xl text-[#E85A4F] font-extrabold tracking-wide duration-200 hover:scale-110"
        >
          Logo
        </Link>
        <nav>
          <section className="flex MOBILE-MENU lg:hidden">
            <div
              className="space-y-2 cursor-pointer HAMBURGER-ICON"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8 cursor-pointer CROSS-ICON"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="w-8 h-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <Link
                  to="/profile"
                  className=" text-[#E85A4F] duration-200 hover:scale-110"
                >
                  {localStorage.getItem(
                    `avatar-${localStorage.getItem("uid")}`
                  ) ? (
                    <Avatar
                      src={localStorage.getItem(
                        `avatar-${localStorage.getItem("uid")}`
                      )}
                    />
                  ) : (
                    <Avatar />
                  )}
                </Link>
                <Link
                  to="/explore"
                  className=" text-[#E85A4F] font-semibold duration-200 hover:scale-110"
                >
                  Explore
                </Link>
                <Link
                  to="/notifications"
                  className=" text-[#E85A4F] font-semibold duration-200 hover:scale-110"
                >
                  Notifications
                </Link>
                <Link
                  to="/messages"
                  className=" text-[#E85A4F] font-semibold duration-200 hover:scale-110"
                >
                  Messages
                </Link>
              </ul>
            </div>
          </section>

          <ul className="items-center hidden space-x-8 DESKTOP-MENU lg:flex">
            <Link
              to="/explore"
              className=" text-[#E85A4F] font-semibold duration-200 hover:scale-110"
            >
              Explore
            </Link>
            <Link
              to="/notifications"
              className=" text-[#E85A4F] font-semibold duration-200 hover:scale-110"
            >
              Notifications
            </Link>
            <Link
              to="/messages"
              className=" text-[#E85A4F] font-semibold duration-200 hover:scale-110"
            >
              Messages
            </Link>
            <Link
              to="/profile"
              className=" text-[#E85A4F] duration-200 hover:scale-110"
            >
              {localStorage.getItem(`avatar-${localStorage.getItem("uid")}`) ? (
                <Avatar
                  src={localStorage.getItem(
                    `avatar-${localStorage.getItem("uid")}`
                  )}
                />
              ) : (
                <Avatar />
              )}
            </Link>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </nav>
  );
}
