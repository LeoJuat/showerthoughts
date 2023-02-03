import { Avatar } from "@mui/material";
import { onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Posts from "../Components/Post";
import { q } from "../firebase";
import AuthContext from "../store/AuthContext";

const Profile = () => {
  const [imageInput, setImageInput] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const [showPosts, setShowPosts] = useState(true);
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const [oldPosts, setOldPosts] = useState([]);

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setOldPosts(posts);
    });
  }, []);

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

    if (localStorage.getItem(`avatar-${localStorage.getItem("uid")}`)) {
      localStorage.removeItem(`avatar-${localStorage.getItem("uid")}`);
    }

    localStorage.setItem(`avatar-${localStorage.getItem("uid")}`, avatar);
    setImageInput(!imageInput);
  };

  const setBioHandler = (e) => {
    e.preventDefault();

    if (localStorage.getItem(`bio-${localStorage.getItem("uid")}`)) {
      localStorage.removeItem(`bio-${localStorage.getItem("uid")}`);
    }

    localStorage.setItem(`bio-${localStorage.getItem("uid")}`, bio);
    setShowBio(!showBio);
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const showPostsHandler = (e) => {
    e.preventDefault();

    setShowLikes(!showLikes);
    setShowPosts(!showPosts);
  };

  const showLikesHandler = (e) => {
    e.preventDefault();

    setShowPosts(!showPosts);
    setShowLikes(!showLikes);
  };

  const bioHandler = (e) => {
    e.preventDefault();

    setShowBio(!showBio);
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

      <div className="bg-[rgba(216,195,165,0.50)] h-92 w-4/5 mx-auto mt-12 rounded-xl py-10">
        <div className="flex items-center justify-between w-5/6 gap-5 mx-auto">
          {localStorage.getItem(`avatar-${localStorage.getItem("uid")}`) ? (
            <Avatar
              src={localStorage.getItem(
                `avatar-${localStorage.getItem("uid")}`
              )}
              sx={{ width: 80, height: 80 }}
            />
          ) : (
            <Avatar sx={{ width: 80, height: 80 }} />
          )}
          <div className="flex flex-col">
            <button
              onClick={avatarHandler}
              className={`w-full lg:px-6 px-3 py-1 lg:py-3 mt-2 text-sm lg:text-xl font-medium duration-200 border-2 border-[#E85A4F] hover:bg-[#E85A4F] hover:text-white rounded-2xl hover:scale-105`}
            >
              Change avatar
            </button>
            <button
              onClick={bioHandler}
              className={`w-full lg:px-6 px-3 py-1 lg:py-3 mt-2 text-sm font-medium duration-200 border-2 border-[#E85A4F] hover:bg-[#E85A4F] hover:text-white rounded-2xl hover:scale-105`}
            >
              Edit bio
            </button>
          </div>
        </div>
        <h1 className="w-5/6 mx-auto mt-10 text-3xl text-gray-700 lg:mt-0">
          @{localStorage.getItem("name")}
        </h1>
        <p className="w-9/12 mx-auto mt-10 mb-8 text-2xl">
          {localStorage.getItem(`bio-${localStorage.getItem("uid")}`)}
        </p>
        {showBio && (
          <div className="flex flex-col items-center justify-center gap-3 py-5">
            <textarea
              maxLength={150}
              rows={2}
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              className="w-5/6 pt-2 text-lg text-black border-2 border-[#E85A4F] rounded-xl px-5 py-1 font-normal tracking-wide bg-transparent textArea"
              name="text"
              placeholder="Write something for your bio!"
            ></textarea>
            <button
              className="border-2 w-5/6 rounded-xl px-5 py-2 font-normal tracking-wide text-white bg-[#E85A4F] hover:bg-[#cb483f] duration-200"
              onClick={setBioHandler}
            >
              Set bio
            </button>
          </div>
        )}
        {imageInput && (
          <div className="flex flex-col items-center justify-center gap-3 py-5 lg:flex-row">
            <input
              onChange={(e) => setAvatar(e.target.value)}
              value={avatar}
              className="pt-2 text-lg text-black border-2 border-[#E85A4F] rounded-xl px-5 py-1 font-normal tracking-wide bg-transparent"
              name="image"
              placeholder="Upload image/gif URL"
            ></input>
            <button
              className="border-2 border-[#E85A4F] rounded-xl px-5 py-2 font-normal tracking-wide text-black hover:bg-[#E85A4F] hover:text-white duration-200"
              onClick={setAvatarHandler}
            >
              Confirm avatar
            </button>
          </div>
        )}
      </div>

      <section className="flex justify-center w-5/6 gap-10 pt-20 mx-auto lg:gap-40">
        <button
          onClick={showPostsHandler}
          className={`w-fit lg:px-10 lg:py-3 px-5 py-1 mt-2 text-md lg:text-2xl font-medium duration-200 border-2 border-[#E85A4F] hover:bg-[#E85A4F] hover:text-white rounded-2xl hover:scale-105 ${
            showPosts ? "bg-[#E85A4F] text-white" : "bg-transparent text-black"
          }`}
        >
          Posts
        </button>
        <button
          onClick={showLikesHandler}
          className={`w-fit lg:px-10 lg:py-3 px-5 py-1 mt-2 text-md lg:text-2xl font-medium duration-200 border-2 border-[#E85A4F] hover:bg-[#E85A4F] hover:text-white rounded-2xl hover:scale-105 ${
            showLikes ? "bg-[#E85A4F] text-white" : "bg-transparent text-black"
          }`}
        >
          Likes
        </button>
      </section>
      {showPosts && (
        <section>
          {oldPosts?.map(
            (post, index) =>
              localStorage.getItem("uid") === post.uid && (
                <Posts
                  key={index}
                  username={post.username}
                  text={post.text}
                  avatar={post.avatar}
                  category={post.category}
                  image={post.image}
                  uuid={post.postUUID}
                  timestamp={post.timestamp
                    ?.toDate()
                    .toLocaleDateString("en-US", options)}
                />
              )
          )}
        </section>
      )}
      {showLikes && (
        <section>
          {oldPosts?.map(
            (post, index) =>
              localStorage.getItem(
                `${localStorage.getItem("uid")}-${post.postUUID}`
              ) && (
                <Posts
                  key={index}
                  username={post.username}
                  text={post.text}
                  avatar={post.avatar}
                  category={post.category}
                  image={post.image}
                  uuid={post.postUUID}
                  timestamp={post.timestamp
                    ?.toDate()
                    .toLocaleDateString("en-US", options)}
                />
              )
          )}
        </section>
      )}
    </>
  );
};

export default Profile;
