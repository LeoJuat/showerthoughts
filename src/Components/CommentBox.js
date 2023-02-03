import React, { useContext, useState } from "react";
import { Avatar } from "@mui/material";
import { addDoc } from "firebase/firestore";
import { colRef, notificationRef } from "../firebase";
import { Timestamp } from "@firebase/firestore";
import AuthContext from "../store/AuthContext";
import { v4 as uuidv4 } from "uuid";

const CommentBox = ({ setShowCommentBox, originalUUID, uid }) => {
  const [imageInput, setImageInput] = useState(false);
  const [category, setCategory] = useState("");
  const [postMessage, setPostMessage] = useState("");
  const [postImage, setPostImage] = useState("");

  const authCtx = useContext(AuthContext);

  const imageHandler = (e) => {
    e.preventDefault();
    setImageInput(!imageInput);
  };

  const categoryHandler = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const postHandler = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      username: localStorage.getItem("name"),
      avatar: localStorage.getItem(`avatar-${localStorage.getItem("uid")}`) ? (
        localStorage.getItem(`avatar-${localStorage.getItem("uid")}`)
      ) : (
        <Avatar />
      ),
      category: category,
      image: postImage,
      text: postMessage,
      uid: localStorage.getItem("uid"),
      originalUUID: originalUUID,
      timestamp: Timestamp.fromDate(new Date()),
      postUUID: uuidv4(),
      comment: true,
    });

    addDoc(notificationRef, {
      username: localStorage.getItem("name"),
      avatar: localStorage.getItem(`avatar-${localStorage.getItem("uid")}`) ? (
        localStorage.getItem(`avatar-${localStorage.getItem("uid")}`)
      ) : (
        <Avatar />
      ),
      type: "commente",
      timestamp: Timestamp.fromDate(new Date()),
      uid: uid,
    });

    setImageInput(false);
    setPostMessage("");
    setPostImage("");
    setCategory("");
    setShowCommentBox();
  };

  return (
    <>
      <div className="bg-[rgba(216,195,165,0.50)] w-4/5 md:w-3/5 mx-auto mt-10 mb-16 rounded-xl">
        <form className="pt-10">
          <div className="flex flex-col gap-5 pl-5 md:pl-16 md:flex-row">
            {localStorage.getItem(`avatar-${localStorage.getItem("uid")}`) ? (
              <Avatar
                src={localStorage.getItem(
                  `avatar-${localStorage.getItem("uid")}`
                )}
                sx={{ width: 56, height: 56 }}
              />
            ) : (
              <Avatar />
            )}
            <textarea
              onChange={(e) => setPostMessage(e.target.value)}
              value={postMessage}
              className="w-5/6 pt-2 text-xl md:text-2xl bg-transparent outline-none textArea placeholder:text-[#717171]"
              name="post"
              rows="5"
              placeholder="What would you like to say?"
            ></textarea>
          </div>
          <hr className={`border-t-8 border-white w-full mt-5`}></hr>
          <div className="flex flex-col items-center justify-between w-5/6 gap-5 py-5 mx-auto bg-transparent lg:flex-row">
            <div className="flex flex-col gap-5 lg:flex-row">
              <button
                onClick={imageHandler}
                className="border-2 border-[#E85A4F] rounded-3xl px-5 py-1 font-normal tracking-wide text-black sm:hover:bg-[#E85A4F] sm:hover:text-white duration-200"
              >
                Image
              </button>
              {imageInput && (
                <input
                  onChange={(e) => setPostImage(e.target.value)}
                  value={postImage}
                  className="w-5/6 pt-2 text-lg text-black bg-transparent"
                  name="image"
                  placeholder="Upload image URL"
                ></input>
              )}
              <div>
                <select
                  onChange={categoryHandler}
                  className="text-black bg-transparent border-2 border-[#E85A4F] rounded-3xl px-5 py-2 font-normal tracking-wide hover:bg-[#E85A4F] hover:text-white duration-200"
                  name="category"
                  id="category-select"
                  value={category}
                >
                  <option value="">Please select category *</option>
                  <option value="Sports">Sports</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Movies-Shows">Movies-Shows</option>
                  <option value="Pop-culture">Pop-culture</option>
                  <option value="Fitness-Health">Fitness-Health</option>
                  <option value="News">News</option>
                  <option value="Technology">Technology</option>
                </select>
              </div>
            </div>
            {authCtx.isLoggedIn && (
              <button
                onClick={postHandler}
                type="submit"
                className="bg-[#E85A4F] rounded-3xl px-10 py-3 font-bold tracking-wide text-white hover:bg-[#da4f45] duration-200"
              >
                Comment
              </button>
            )}
            {!authCtx.isLoggedIn && (
              <button
                onClick={(e) => e.preventDefault()}
                className="bg-[#E85A4F] rounded-3xl px-10 py-3 font-bold tracking-wide text-white hover:bg-[#da4f45] duration-200"
              >
                Login to Comment
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentBox;
