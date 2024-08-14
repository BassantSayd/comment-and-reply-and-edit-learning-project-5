import { useState } from "react";
import "./Post.css";
import AddnewComment from "../AddNewComment/AddNewComment";
import CommentsWrapper from "../CommentsWrapper/CommentsWrapper";

function Post(props) {
  //Toggling
  const [showReplayDiv, setShowReplayDiv] = useState(false);
  const [count, setCount] = useState(props.likes);
  const [postId] = useState(props.UniqueID);
  function Plus() {
    const newValue = count + 1;
    setCount(newValue);
  }

  function Muins() {
    const newValue = count - 1;
    setCount(newValue);
  }

  function HandleDelete() {
    props.delteItem(postId);
  }

  function HandleReplayBtn() {
    let finalResult = !showReplayDiv;
    setShowReplayDiv(finalResult);
  }

  function HideReplaySection() {
    setShowReplayDiv(false);
  }

  return (
    <div className="PostWrapper">
      <div className="Post">
        <div className="CounterWrapper">
          <button onClick={Plus}>+</button>
          <span>{count}</span>
          <button onClick={Muins}>-</button>
        </div>
        <p>{props.content}</p>
        {props.username == "Fady" ? (
          <button className="DeleteBtns" onClick={HandleDelete}>
            Delete
          </button>
        ) : null}
        <button onClick={HandleReplayBtn}>Replay</button>
      </div>
      <CommentsWrapper
        postid={props.UniqueID}
        AllComments={props.comments}
        deleteComment={props.deleteComment}
        updateComment={props.updateComment}
      ></CommentsWrapper>
      {showReplayDiv == true ? (
        <AddnewComment
          HideReplaySection={HideReplaySection}
          addNewComment={props.addNewComment}
          UniqueID={props.UniqueID}
        ></AddnewComment>
      ) : null}
    </div>
  );
}

export default Post;
