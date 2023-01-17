import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const Profile = () => {
  const [imageInput, setImageInput] = useState(false);
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout(authCtx.token);
    navigate("/");
  };

  const avatarHandler = (e) => {
    e.preventDefault();

    setImageInput(!imageInput);
  };

  const setAvatarHandler = (e) => {
    e.preventDefault();

    localStorage.setItem("avatar", avatar);
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
      <button
        className="border-2 border-[#E85A4F] rounded-3xl px-5 py-1 font-normal tracking-wide text-black hover:bg-[#E85A4F] hover:text-white duration-200"
        onClick={avatarHandler}
      >
        Set avatar
      </button>
      {imageInput && (
        <div>
          <input
            onChange={(e) => setAvatar(e.target.value)}
            value={avatar}
            className="w-5/6 pt-2 text-lg text-black bg-red-500"
            name="image"
            placeholder="Upload image URL"
          ></input>
          <button
            className="border-2 border-[#E85A4F] rounded-3xl px-5 py-1 font-normal tracking-wide text-black hover:bg-[#E85A4F] hover:text-white duration-200"
            onClick={setAvatarHandler}
          >
            Confirm avatar
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
