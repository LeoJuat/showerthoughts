import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";

const Comment = forwardRef(
  ({ username, timestamp, text, image, avatar, category }, ref) => {
    return (
      <>
        <section className="w-3/5 h-full pb-20 mx-auto">
          <div ref={ref}>
            <div className="flex gap-4 ml-16 translate-y-7">
              <Avatar src={avatar} sx={{ width: 72, height: 72 }} />
              <h3 className="translate-y-4 text-[#717171]">@{username}</h3>
            </div>
            <div className="outline outline-4 outline-[#E85A4F] rounded-2xl pt-20 shadow-xl bg-transparent">
              <div>
                <div>
                  <p className="w-5/6 mx-auto text-3xl text-slate-700">
                    {text}
                  </p>
                </div>
              </div>
              {image && (
                <img
                  className="object-contain mx-auto mt-10 mb-8 bg-transparent shadow-xl w-fit h-80"
                  src={image}
                  alt={image}
                />
              )}
              <div className="flex items-end justify-between w-11/12 pt-5 pb-10">
                <button
                  className={`${category} rounded-2xl cursor-default ml-24 mt-5 px-10 py-3 font-bold tracking-wide text-white`}
                >
                  {category}
                </button>
                <p className="text-[#677079] scale-90">{timestamp}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
);

export default Comment;
