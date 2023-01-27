import React from "react";
import Chat from "../Components/Chat";
import NavBar from "../Components/NavBar";
import Sidebar from "../Components/Sidebar";

const Messages = () => {
  return (
    <>
      <NavBar />
      <section className="w-full h-[75vh]">
        <div className="bg-[rgba(216,195,165,0.50)] flex w-4/5 h-[95%] mx-auto mt-16 rounded-xl">
          <Sidebar />
          <Chat />
        </div>
      </section>
    </>
  );
};

export default Messages;
