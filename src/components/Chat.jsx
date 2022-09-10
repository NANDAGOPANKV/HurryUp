import React from "react";
import Messages from "./Messages";
import Input from "./Input";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>UserName</span>
        <div className="chatIcons">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/2px-common-icons/video-call-1.png"
            alt="VideoCall"
          />
          <img
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt="AddUser"
          />
          <img
            src="https://www.igneuswoodfiredovens.com/wp-content/uploads/2021/01/extra.png"
            alt="More"
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
