import { Avatar } from "@mui/material";
import React from "react";

const TweetBox = () => {
  return (
    <div className="bg-[rgba(217,217,217,0.49)] w-4/5 mx-auto mt-10 rounded-xl">
      <form className="pt-10">
        <div className="flex gap-5 pl-16">
          <Avatar sx={{ width: 56, height: 56 }} />
          <textarea
            className="textArea bg-transparent text-2xl w-5/6 outline-none pt-2"
            name="tweet"
            rows="5"
            placeholder="What's happening? (Optional: Enter image URL)"
          ></textarea>
        </div>
        <hr className={`border-t-8 border-white w-full mt-5`}></hr>
        <div className="bg-transparent w-5/6 mx-auto flex justify-between items-center py-5">
          <div>
            <label className="mr-3 text-slate-700" htmlFor="category">
              <span className="text-red-500">*</span> Choose a category:
            </label>
            <select
              className="text-slate-700"
              name="category"
              id="category-select"
            >
              <option value="">Please choose a category</option>
              <option value="Sports">Sports</option>
              <option value="Sports">Entertainment</option>
              <option value="Movies/Shows">Movies/Shows</option>
              <option value="Pop culture">Pop culture</option>
              <option value="Fitness/Health">Fitness/Health</option>
              <option value="News">News</option>
              <option value="Technology">Technology</option>
            </select>
          </div>
          <button className="bg-[#03A9F4] rounded-3xl px-10 py-3 font-bold tracking-wide text-white hover:bg-[#0b94d4] duration-200">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
