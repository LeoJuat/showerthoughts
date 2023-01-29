import { Avatar } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Chat = () => {
  // const [imageInput, setImageInput] = useState(false);
  // const [postImage, setPostImage] = useState("");

  // const imageHandler = (e) => {
  //   e.preventDefault();
  //   setImageInput(!imageInput);
  // };

  return (
    <div className="flex flex-col w-2/3 px-3 py-5 overflow-y-scroll scrollbar-hide h-5/6">
      <div className="mb-10">
        <div className="flex">
          <div>
            <Avatar />
            <span className="text-gray-500">Just now</span>
          </div>
          <div className="w-1/2 ml-5 h-1/2">
            <p className="flex justify-center px-2 py-3 text-lg font-medium text-white bg-gray-400 w-fit rounded-bl-2xl rounded-br-2xl rounded-tr-2xl">
              Hello sadlfsfnalsfnslanlsajnda
            </p>
            {/* <img
              className="w-1/4 h-1/4"
              src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif"
              alt="squirtle"
            /> */}
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex flex-row-reverse gap-5">
          <div>
            <Avatar />
            <span className="text-gray-500">Just now</span>
          </div>
          <div className="flex justify-end w-1/2 h-1/2">
            <p className="flex justify-center w-fit px-2 py-3 text-white text-lg font-medium bg-[#ec827a] rounded-bl-2xl rounded-br-2xl rounded-tl-2xl">
              Hi!
            </p>
            {/* <img
              className="w-1/4 h-1/4"
              src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif"
              alt="squirtle"
            /> */}
          </div>
        </div>
      </div>

      <form className="absolute flex flex-col w-2/4 bottom-16">
        <div>
          <input
            maxLength={90}
            type="text"
            id="message"
            name="message"
            placeholder="Type message here"
            className="w-full mb-3 px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none focus:border-[#E85A4F] focus:ring-2 focus:ring-[#b7736e] bg-gray-100"
          />
        </div>
        <div className="flex gap-4">
          <button className="text-white bg-[#E85A4F] border-[#E85A4F] w-full border-2 my-1 py-2 px-4 focus:outline-none hover:bg-[#c1453c] hover:text-white rounded font-medium text-lg transition-all duration-300 ease-in-out">
            Send
          </button>
          {/* <button
            onClick={imageHandler}
            className="text-[#E85A4F] border-[#E85A4F] w-1/4 border-2 my-1 py-2 px-4 focus:outline-none hover:bg-[#E85A4F] hover:text-white rounded font-medium text-lg transition-all duration-300 ease-in-out"
          >
            Image
          </button>
          {imageInput && (
            <input
              onChange={(e) => setPostImage(e.target.value)}
              value={postImage}
              className="w-3/6 pt-2 pl-3 text-lg border-[#E85A4F] border rounded-lg text-black bg-transparent"
              name="image"
              placeholder="Upload image URL"
            ></input>
          )} */}
        </div>
      </form>
    </div>
  );
};

export default Chat;
