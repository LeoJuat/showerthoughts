import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { addDoc } from "firebase/firestore";
import { colRef } from "../firebase";
import { Timestamp } from "@firebase/firestore";

const TweetBox = ({ setPosted }) => {
  const [imageInput, setImageInput] = useState(false);
  const [category, setCategory] = useState("");
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

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
      image: tweetImage,
      text: tweetMessage,
      timestamp: Timestamp.fromDate(new Date()),
    });

    setImageInput(!imageInput);
    setTweetMessage("");
    setTweetImage("");
    setCategory("");
    setPosted(true);
  };

  return (
    <div className="bg-[rgba(217,217,217,0.49)] w-4/5 mx-auto mt-10 rounded-xl">
      <form className="pt-10">
        <div className="flex gap-5 pl-16">
          <Avatar sx={{ width: 56, height: 56 }} />
          <textarea
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            className="textArea bg-transparent text-2xl w-5/6 outline-none pt-2"
            name="tweet"
            rows="5"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <hr className={`border-t-8 border-white w-full mt-5`}></hr>
        <div className="bg-transparent w-5/6 mx-auto flex justify-between items-center py-5">
          <div className="flex gap-5">
            <button
              onClick={imageHandler}
              className="border-2 border-[#03A9F4] rounded-3xl px-5 py-1 font-normal tracking-wide text-black hover:bg-[#03A9F4] hover:text-white duration-200"
            >
              Image
            </button>
            {imageInput && (
              <input
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage}
                className="bg-transparent text-black text-lg w-5/6 pt-2"
                name="image"
                placeholder="Upload image URL"
              ></input>
            )}
            <div>
              <select
                onChange={categoryHandler}
                className="text-black bg-transparent border-2 border-[#03A9F4] rounded-3xl px-5 py-2 font-normal tracking-wide hover:bg-[#03A9F4] hover:text-white duration-200"
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
            className="bg-[#03A9F4] rounded-3xl px-10 py-3 font-bold tracking-wide text-white hover:bg-[#0b94d4] duration-200"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
