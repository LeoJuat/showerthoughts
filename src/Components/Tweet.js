import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";

const Tweet = forwardRef(
  ({ username, timestamp, text, image, avatar, category }, ref) => {
    return (
      <>
        <section className="w-4/5 mx-auto h-full pb-20">
          <div ref={ref}>
            <div className="flex ml-16 translate-y-7 gap-4">
              <Avatar src={avatar} sx={{ width: 72, height: 72 }} />
              <h3 className="translate-y-4 text-slate-700">@{username}</h3>
            </div>
            <div className="outline outline-4 outline-[#03A9F4] rounded-2xl pt-20 shadow-xl bg-gray-100">
              <div>
                <div>
                  <p className="text-3xl w-5/6 mx-auto text-slate-700">
                    {text}
                  </p>
                </div>
              </div>
              {image && (
                <img
                  className="mt-10 mb-8 w-fit h-80 object-contain bg-transparent mx-auto shadow-xl"
                  src={image}
                  alt={image}
                />
              )}
              <div className="flex w-11/12 justify-between items-end">
                <button
                  className={`${category} rounded-2xl cursor-default ml-24 mt-5 px-10 py-3 font-bold tracking-wide text-white`}
                >
                  {category}
                </button>
                <p className="text-[#677079] scale-90">{timestamp}</p>
              </div>
              <hr className={`border-t-4 border-[#03A9F4] w-full mt-5`}></hr>
              <div className="flex items-center justify-evenly py-5">
                <svg
                  className="fill-[#677079] cursor-pointer hover:scale-110 duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                >
                  <path d="M1.898 29.382a1 1 0 0 0 .906.576c2.87 0 5.298-.698 8.056-2.324 1.338.212 3.98.474 5.14.474 8.756 0 15.878-5.846 15.878-13.034S24.756 2.042 16 2.042.122 7.886.122 15.074c0 3.388 1.634 6.662 4.51 9.088a17.344 17.344 0 0 1-2.594 4.154c-.248.3-.304.716-.14 1.066zm.224-14.308C2.122 8.99 8.348 4.04 16 4.04s13.878 4.95 13.878 11.034S23.652 26.108 16 26.108c-1.148 0-4.136-.308-5.146-.504a1.035 1.035 0 0 0-.71.128c-1.864 1.14-3.49 1.792-5.23 2.068a19.018 19.018 0 0 0 1.86-3.586.997.997 0 0 0-.328-1.16c-2.79-2.112-4.324-4.948-4.324-7.98z" />
                </svg>

                <svg
                  className="fill-[#677079] cursor-pointer hover:scale-110 duration-200"
                  width="45"
                  height="45"
                  viewBox="0 0 101 101"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M90.8 59.3 78.3 71.7c-.8.8-1.8 1.2-2.8 1.2-1 0-2.1-.4-2.8-1.2L60 59.3c-1.6-1.6-1.6-4.1-.1-5.6 1.6-1.6 4-1.6 5.5 0l5.5 5.7V33h-35c-2.2 0-4-1.8-4-4s1.8-4 4-4h39.5c2.2 0 3.6 1.7 3.6 3.9v30.4l6-5.7c1.6-1.6 4.3-1.5 5.9 0 1.5 1.6 1.5 4.1-.1 5.7zM56.1 65H21V38.5l5.5 5.7c.8.8 1.7 1.2 2.7 1.2 1 0 2-.4 2.8-1.2 1.6-1.6 1.5-4.1 0-5.6L19.4 26.1c-1.6-1.5-4.1-1.5-5.7 0L1.2 38.5c-1.6 1.6-1.6 4.1 0 5.6 1.6 1.6 4.3 1.6 5.9 0l6-5.7v30.4c0 2.2 1.3 4.1 3.6 4.1h39.5c2.2 0 4-1.8 4-4S58.3 65 56.1 65z" />
                </svg>

                <svg
                  className="fill-[#677079] cursor-pointer hover:scale-110 duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 101 101"
                >
                  <path d="M49.7 80.9c.3.1.6.2.9.2.3 0 .6-.1.9-.2C78 70.1 86.9 50.7 84.1 36.2c-1.9-9.8-8.9-16.1-17.8-16.1-5 0-10.4 2-15.7 5.9-5.3-4-10.8-6.1-15.8-6.1-8.9 0-15.9 6.4-17.8 16.2-2.9 14.7 6.1 34.2 32.7 44.8zM21.6 37.1c1.4-7.5 6.6-12.3 13.1-12.3 4.4 0 9.4 2.1 14.3 6.2.9.7 2.1.7 3 0 4.9-4 9.8-6 14.2-6 6.5 0 11.7 4.8 13.1 12.2 2.4 12.4-5.6 29.2-28.8 39-23.2-9.8-31.3-26.6-28.9-39.1z" />
                </svg>

                <svg
                  className="fill-[#677079] cursor-pointer hover:scale-110 duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M6.54 55.08a1.91 1.91 0 0 1-.62-.1 2 2 0 0 1-1.38-2c0-.3 2.06-29.34 31.18-31.62V10.92a2 2 0 0 1 3.43-1.4l19.74 20.16a2 2 0 0 1 0 2.8L39.15 52.64a2 2 0 0 1-3.43-1.4V41c-19.44.74-27.41 13-27.49 13.15a2 2 0 0 1-1.69.93Zm33.18-39.26v7.41a2 2 0 0 1-1.93 2c-18.84.69-25.58 13.24-28 21.31 5-4.32 13.91-9.6 27.81-9.6h.09a2 2 0 0 1 2 2v7.41l15-15.26Z"
                    data-name="Arrow"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
);

export default Tweet;
