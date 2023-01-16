import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout(authCtx.token);
    navigate("/");
  };

  return (
    <>
      <nav className="w-5/6 py-10 mx-auto background">
        <ul className="flex items-center text-[#E85A4F] justify-between">
          <Link
            to="/"
            className="text-4xl font-extrabold tracking-wide duration-200 hover:scale-110"
          >
            Logo
          </Link>
          <div className="flex items-center gap-10">
            <button
              onClick={logoutHandler}
              className="font-semibold duration-200 hover:scale-110"
            >
              Logout
            </button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Profile;
