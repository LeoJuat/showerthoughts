import React, { forwardRef, useState } from "react";
import { Avatar } from "@mui/material";
import styles from "./Post.module.css";
import CommentBox from "./CommentBox";
import Comment from "./Comment";
import { addDoc, Timestamp } from "firebase/firestore";
import { notificationRef } from "../firebase";

const Posts = forwardRef(
  (
    {
      admin,
      username,
      timestamp,
      text,
      image,
      avatar,
      category,
      uuid,
      comment,
      oldPosts,
      uid,
    },
    ref
  ) => {
    const [liked, setLiked] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);

    const likeHandler = (e) => {
      e.preventDefault();

      addDoc(notificationRef, {
        username: localStorage.getItem("name"),
        avatar: localStorage.getItem(`avatar-${localStorage.getItem("uid")}`)
          ? localStorage.getItem(`avatar-${localStorage.getItem("uid")}`)
          : "",
        type: "like",
        timestamp: Timestamp.fromDate(new Date()),
        uid: uid,
      });

      setLiked(!liked);
      localStorage.getItem(`${localStorage.getItem("uid")}-${uuid}`)
        ? localStorage.removeItem(`${localStorage.getItem("uid")}-${uuid}`)
        : localStorage.setItem(
            `${localStorage.getItem("uid")}-${uuid}`,
            `${localStorage.getItem("uid")}-${uuid}`
          );
    };

    const commentHandler = (e) => {
      e.preventDefault();

      setShowCommentBox(!showCommentBox);
    };

    const commentBoxHandler = () => {
      setShowCommentBox(!showCommentBox);
    };

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    return (
      <>
        {!comment && (
          <section className="w-full h-full mx-auto scale-75 md:pb-20 md:w-4/5 md:scale-100">
            <div ref={ref}>
              {admin && (
                <p className="text-[#717171] text-end">* pinned message</p>
              )}
              <div className="flex gap-4 ml-16 translate-y-7">
                <Avatar src={avatar} sx={{ width: 72, height: 72 }} />
                <h3 className="translate-y-4 text-[#717171]">@{username}</h3>
              </div>
              <div className="outline outline-4 outline-[#E85A4F] rounded-2xl pt-20 shadow-xl bg-transparent">
                <div>
                  <div>
                    <p className="w-5/6 mx-auto text-xl md:text-3xl text-slate-700">
                      {text}
                    </p>
                  </div>
                </div>
                {image && (
                  <img
                    className="object-contain mx-auto mt-10 mb-8 scale-75 bg-transparent shadow-xl md:h-80 w-fit md:scale-100 h-30"
                    src={image}
                    alt={image}
                  />
                )}
                <div className="flex flex-col items-start justify-between w-full md:items-end md:flex-row md:w-11/12">
                  <button
                    className={`${category} rounded-2xl cursor-default ml-8 lg:ml-24 mt-5 lg:px-10 lg:py-3 px-5 py-2 lg:text-base text-xs font-bold lg:tracking-wide text-white`}
                  >
                    {category}
                  </button>
                  <p className="text-[#677079] scale-75 md:scale-90">
                    {timestamp}
                  </p>
                </div>
                <hr className={`border-t-4 border-[#E85A4F] w-full mt-5`}></hr>
                <div className="flex items-center py-5 justify-evenly">
                  <svg
                    onClick={commentHandler}
                    className="fill-[#677079] cursor-pointer hover:scale-110 duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                  >
                    <path d="M1.898 29.382a1 1 0 0 0 .906.576c2.87 0 5.298-.698 8.056-2.324 1.338.212 3.98.474 5.14.474 8.756 0 15.878-5.846 15.878-13.034S24.756 2.042 16 2.042.122 7.886.122 15.074c0 3.388 1.634 6.662 4.51 9.088a17.344 17.344 0 0 1-2.594 4.154c-.248.3-.304.716-.14 1.066zm.224-14.308C2.122 8.99 8.348 4.04 16 4.04s13.878 4.95 13.878 11.034S23.652 26.108 16 26.108c-1.148 0-4.136-.308-5.146-.504a1.035 1.035 0 0 0-.71.128c-1.864 1.14-3.49 1.792-5.23 2.068a19.018 19.018 0 0 0 1.86-3.586.997.997 0 0 0-.328-1.16c-2.79-2.112-4.324-4.948-4.324-7.98z" />
                  </svg>

                  {/* Like */}
                  {localStorage.getItem(
                    `${localStorage.getItem("uid")}-${uuid}`
                  ) ? (
                    <p
                      onClick={likeHandler}
                      className={`text-5xl cursor-pointer ${styles.animateLike}`}
                    >
                      ❤️
                    </p>
                  ) : (
                    !liked && (
                      <svg
                        onClick={likeHandler}
                        className="fill-[#677079] cursor-pointer hover:scale-110 duration-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 101 101"
                      >
                        <path d="M49.7 80.9c.3.1.6.2.9.2.3 0 .6-.1.9-.2C78 70.1 86.9 50.7 84.1 36.2c-1.9-9.8-8.9-16.1-17.8-16.1-5 0-10.4 2-15.7 5.9-5.3-4-10.8-6.1-15.8-6.1-8.9 0-15.9 6.4-17.8 16.2-2.9 14.7 6.1 34.2 32.7 44.8zM21.6 37.1c1.4-7.5 6.6-12.3 13.1-12.3 4.4 0 9.4 2.1 14.3 6.2.9.7 2.1.7 3 0 4.9-4 9.8-6 14.2-6 6.5 0 11.7 4.8 13.1 12.2 2.4 12.4-5.6 29.2-28.8 39-23.2-9.8-31.3-26.6-28.9-39.1z" />
                      </svg>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
        {showCommentBox && (
          <CommentBox
            uid={uid}
            originalUUID={uuid}
            setShowCommentBox={commentBoxHandler}
          />
        )}
        {oldPosts?.map((post, index) => {
          return uuid === post.originalUUID ? (
            <Comment
              key={index}
              comment={post.comment}
              username={post.username}
              text={post.text}
              avatar={post.avatar}
              category={post.category}
              image={post.image}
              uuid={post.postUUID}
              originalUUID={post.originalUUID}
              timestamp={post.timestamp
                ?.toDate()
                .toLocaleDateString("en-US", options)}
            />
          ) : (
            ""
          );
        })}
      </>
    );
  }
);

export default Posts;
