import React from "react";
import "../Styles/CommentSection.css";
import SentImage from "../ProjectImages/Icons/SendIcon.png";

const CommentSection = () => {
  return (
    <div className="CommentSection__Container">
      <form action="" className="CommentSection__Container--content">
        <span>
          <label>Email</label>
          <input id='CommentEmail' type="email" name="Email" placeholder="Type in Your Email" />
        </span>
        <div className="CommentSection--button">
        <span>
          <label>Comment</label>
          <textarea
            name="Comment"
            id="CommentArea"
            cols="30"
            rows="10"
            placeholder="Start Typing"
          ></textarea>
        </span>
        <button type="submit" id='SentCommentButton'>
          Send <img src={SentImage} alt="" />
        </button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
