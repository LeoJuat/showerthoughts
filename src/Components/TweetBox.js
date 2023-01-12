import { Avatar } from "@mui/material";
import React from "react";

const TweetBox = () => {
  return (
    <div className="bg-[rgba(217,217,217,0.49)] w-5/6 mx-auto mt-10 rounded-xl">
      <form className="pt-10">
        <div className="flex gap-5 pl-16">
          <Avatar sx={{ width: 56, height: 56 }} />
          <textarea
            className="textArea bg-transparent text-2xl w-5/6 outline-none pt-2"
            name="tweet"
            rows="5"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <hr className={`border-t-8 border-white w-full mt-5`}></hr>
        <div className="bg-transparent w-5/6 mx-auto flex justify-end py-5">
          <button className="bg-[#03A9F4] rounded-2xl px-10 py-3 font-bold tracking-wide text-white">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
