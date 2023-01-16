import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { addDoc } from "firebase/firestore";
import { colRef } from "../firebase";
import { Timestamp } from "@firebase/firestore";

const PostBox = () => {
  const [imageInput, setImageInput] = useState(false);
  const [category, setCategory] = useState("");
  const [postMessage, setPostMessage] = useState("");
  const [postImage, setPostImage] = useState("");

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
      username: "TestName",
      avatar:
        "https://user-images.githubusercontent.com/100502573/212198528-ba21fc46-e85e-44ef-aad3-6ae1b4026c49.jpg",
      category: category,
      image: postImage,
      text: postMessage,
      timestamp: Timestamp.fromDate(new Date()),
    });

    setImageInput(!imageInput);
    setPostMessage("");
    setPostImage("");
    setCategory("");
  };

  return (
    <>
      <div className="bg-[rgba(216,195,165,0.50)] w-4/5 mx-auto mt-16 rounded-xl">
        <form className="pt-10">
          <div className="flex gap-5 pl-16">
            <Avatar sx={{ width: 56, height: 56 }} />
            <textarea
              onChange={(e) => setPostMessage(e.target.value)}
              value={postMessage}
              className="w-5/6 pt-2 text-2xl bg-transparent outline-none textArea placeholder:text-[#717171]"
              name="post"
              rows="5"
              placeholder="What's happening?"
            ></textarea>
          </div>
          <hr className={`border-t-8 border-white w-full mt-5`}></hr>
          <div className="flex items-center justify-between w-5/6 py-5 mx-auto bg-transparent">
            <div className="flex gap-5">
              <button
                onClick={imageHandler}
                className="border-2 border-[#E85A4F] rounded-3xl px-5 py-1 font-normal tracking-wide text-black hover:bg-[#E85A4F] hover:text-white duration-200"
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
                {/* <label htmlFor="category">
                <span className="text-red-500">*</span>
              </label> */}
              </div>
            </div>
            <button
              onClick={postHandler}
              type="submit"
              className="bg-[#E85A4F] rounded-3xl px-10 py-3 font-bold tracking-wide text-white hover:bg-[#da4f45] duration-200"
            >
              Post
            </button>
          </div>
        </form>
      </div>
      <h1 className="text-[#E85A4F] font-bold text-3xl pt-20 pb-5 tracking-wider w-4/5 mx-auto">
        Posts
      </h1>
    </>
  );
};

export default PostBox;
