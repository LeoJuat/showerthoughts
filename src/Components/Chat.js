import { Avatar } from "@mui/material";
import { addDoc, onSnapshot, Timestamp } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { chatQ, usersChatRef } from "../firebase";

const Chat = ({ userClicked, setMessages }) => {
  const messageRef = useRef();
  const [oldPosts, setOldPosts] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  localStorage.setItem("receiverUid", userClicked);

  useEffect(() => {
    onSnapshot(chatQ, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setOldPosts(posts);
    });
    scrollToBottom();
  }, [userClicked]);

  const messageHandler = (e) => {
    e.preventDefault();

    const enteredMessage = messageRef.current.value;

    setMessages(enteredMessage);

    addDoc(usersChatRef, {
      username: localStorage.getItem("name"),
      avatar: localStorage.getItem(`avatar-${localStorage.getItem("uid")}`) ? (
        localStorage.getItem(`avatar-${localStorage.getItem("uid")}`)
      ) : (
        <Avatar />
      ),
      timestamp: Timestamp.fromDate(new Date()),
      receiverUid: localStorage.getItem("receiverUid"),
      senderUid: localStorage.getItem("uid"),
      messages: enteredMessage,
    });

    messageRef.current.value = "";
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
      <div className="flex flex-col w-2/3 px-3 py-5 overflow-y-scroll scrollbar-hide h-5/6">
        {userClicked &&
          oldPosts?.map((post, index) => {
            if (
              post.senderUid === localStorage.getItem("uid") &&
              post.receiverUid === userClicked
            ) {
              return (
                <div key={index} className="mb-10">
                  <div className="flex flex-row-reverse gap-5">
                    <div>
                      <Avatar src={post.avatar} />
                    </div>
                    <div className="flex justify-end w-1/2 ml-5 h-1/2">
                      <p className="flex justify-center w-fit px-3 py-3 text-white text-lg font-medium bg-[#ec827a] rounded-bl-2xl rounded-br-2xl rounded-tl-2xl">
                        {post.messages}
                      </p>
                    </div>
                  </div>
                  <span className="flex flex-row-reverse text-gray-500">
                    {post.timestamp
                      ?.toDate()
                      .toLocaleDateString("en-US", options)}
                  </span>
                </div>
              );
            }
            if (
              post.receiverUid === localStorage.getItem("uid") &&
              post.senderUid === userClicked
            ) {
              return (
                <div key={index} className="mb-10">
                  <div className="flex">
                    <div>
                      <Avatar src={post.avatar} />
                    </div>
                    <div className="w-1/2 ml-5 h-1/2">
                      <p className="flex justify-center px-3 py-3 text-lg font-medium text-white bg-gray-400 w-fit rounded-bl-2xl rounded-br-2xl rounded-tr-2xl">
                        {post.messages}
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-500">
                    {post.timestamp
                      ?.toDate()
                      .toLocaleDateString("en-US", options)}
                  </span>
                  <div ref={messagesEndRef} />
                </div>
              );
            } else {
              return "";
            }
          })}

        {userClicked && !oldPosts && (
          <p className="flex justify-center py-10">No messages found</p>
        )}

        {!userClicked && (
          <p className="flex justify-center py-10">Select a user to message</p>
        )}

        <form
          onSubmit={messageHandler}
          className="absolute flex flex-col w-2/4 bottom-16"
        >
          <div>
            <input
              ref={messageRef}
              maxLength={90}
              type="text"
              id="message"
              name="message"
              placeholder="Type message here"
              className="w-full mb-3 px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none focus:border-[#E85A4F] focus:ring-2 focus:ring-[#b7736e] bg-gray-100"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="text-white bg-[#E85A4F] border-[#E85A4F] w-full border-2 my-1 py-2 px-4 focus:outline-none hover:bg-[#c1453c] hover:text-white rounded font-medium text-lg transition-all duration-300 ease-in-out"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chat;
