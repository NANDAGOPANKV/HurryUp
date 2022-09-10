import React from "react";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ic_attach_file_48px.svg/1200px-Ic_attach_file_48px.svg.png"
          alt="not attach"
        />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img
            src="https://toppng.com/uploads/preview/add-camera-icon-icon-add-11553485583calilemiyg.png"
            alt="not ImageAdd"
          />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
