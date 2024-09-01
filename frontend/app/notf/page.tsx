"use client";
import React from "react";
import addNotification from "react-push-notification";

const Page = () => {
  const buttonClick = () => {
    console.log("daragdlaa");

    addNotification({
      title: "Warning",
      subtitle: "This is a subtitle",
      message: "This is a very long message",
      theme: "darkblue",
      duration: 4000,
    });
  };

  return (
    <div className="page">
      <button
        onClick={() => {
          buttonClick(), console.log("daragdaj bn ");
        }}
        className="button"
      >
        Hello world.
      </button>
    </div>
  );
};

export default Page;
