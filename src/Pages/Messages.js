import React, { useState } from "react";
import Chat from "../Components/Chat";
import NavBar from "../Components/NavBar";
import Sidebar from "../Components/Sidebar";

const Messages = () => {
  const [messages, setMessages] = useState("");
  const [messageThread, setMessageThread] = useState("");
  const [userClicked, setUserClicked] = useState("");

  const setMessagesHandler = (msg) => {
    setMessages(msg);
  };

  const threadHandler = (uid) => {
    setMessageThread(uid);
    setUserClicked(uid);
  };

  return (
    <>
      <NavBar />
      <section className="w-full h-[75vh]">
        <div className="bg-[rgba(216,195,165,0.50)] flex w-4/5 h-[95%] mx-auto mt-16 rounded-xl">
          <Sidebar messages={messages} setMessageThread={threadHandler} />
          <Chat
            userClicked={userClicked}
            messageThread={messageThread}
            setMessages={setMessagesHandler}
          />
        </div>
      </section>
    </>
  );
};

export default Messages;
