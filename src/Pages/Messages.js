import React, { useState } from "react";
import Chat from "../Components/Chat";
import NavBar from "../Components/NavBar";
import Sidebar from "../Components/Sidebar";

const Messages = () => {
  const [messages, setMessages] = useState("");
  const [userClicked, setUserClicked] = useState("");

  const setMessagesHandler = (msg) => {
    setMessages(msg);
  };

  const threadHandler = (uid) => {
    setUserClicked(uid);
  };

  return (
    <>
      <NavBar />
      <section className="w-full h-[75vh]">
        <div className="bg-[rgba(216,195,165,0.50)] flex lg:flex-row flex-col w-4/5 lg:h-[95%] mx-auto mt-6 rounded-xl">
          <div className="bg-[#E85A4F] rounded-t-xl lg:rounded-bl-xl">
            <Sidebar messages={messages} setMessageThread={threadHandler} />
          </div>
          <div className="flex w-full lg:w-4/5">
            <Chat userClicked={userClicked} setMessages={setMessagesHandler} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Messages;
