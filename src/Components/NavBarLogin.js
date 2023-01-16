import React from "react";
import { Link } from "react-router-dom";

const NavBarLogin = () => {
  return (
    <nav className="w-5/6 py-10 mx-auto background">
      <ul className="flex items-center text-[#E85A4F] justify-between">
        <Link
          to="/"
          className="text-4xl font-extrabold tracking-wide duration-200 hover:scale-110"
        >
          Logo
        </Link>
        <div className="flex items-center gap-16">
          <Link
            to="/login"
            className="text-xl font-semibold duration-200 hover:scale-110"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-xl font-semibold duration-200 hover:scale-110"
          >
            Signup
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBarLogin;
