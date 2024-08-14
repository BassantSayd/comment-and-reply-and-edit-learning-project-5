import { useState } from "react";
import "./NewPost.css";
function NewPost(props) {
  const [inputvalue, setInputValue] = useState("");

  //Function will fire when the user clicks on the button
  function handleSendPost() {
    props.AddnewPostInsideArray(inputvalue);
    setInputValue("");
  }

  //Function will fire when the user is typing inside the input field
  function handleOnChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <div id="SendNewPostSection">
      <input
        placeholder="Send New Post ...."
        id="NewPostField"
        value={inputvalue}
        onChange={handleOnChange}
      ></input>
      <button id="SendNewPost" onClick={handleSendPost}>
        Send
      </button>
    </div>
  );
}

export default NewPost;
