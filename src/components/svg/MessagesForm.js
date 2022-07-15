import React from "react";
import Attachmnets from "./Attachmnets";

const MessagesForm = ({ handleSubmit, text, setText, setImg }) => {
  return (
    <form className="message__form" onSubmit={handleSubmit}>
      <label htmlFor="img">
        <Attachmnets />
      </label>
      <input
        onChange={(e) => setImg(e.target.files[0])}
        type="file"
        id="img"
        accept="image/*"
        style={{ display: "none" }}
      />
      <div>
        <input
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button className="btn">Send</button>
      </div>
    </form>
  );
};

export default MessagesForm;
