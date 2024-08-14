import { useEffect, useState } from "react";
import "./App.css";
import NewPost from "./Components/AddNewPost/NewPost";
import Post from "./Components/Post/Post";

function App() {
  const [ArrayOfObjects, setArrayOfObjects] = useState([
    {
      likes: 0,
      content: "@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.",
      id: 1,
      username: "ramsesmiron 1 week ago",
      comments: [
        {
          commentContent: "Great work! I haven’t got much to add beyond what’s already been said, but I just wanted to say congrats! You’ve done an excellent job on this!",
          commentid: 1,
        },
        {
          commentContent: "Great work! I haven’t got much to add beyond what’s already been said, but I just wanted to say congrats! You’ve done an excellent job on this!",
          commentid: 2,
        },
        {
          commentContent: "Great work! I haven’t got much to add beyond what’s already been said, but I just wanted to say congrats! You’ve done an excellent job on this!",
          commentid: 3,
        },
        {
          commentContent: "Great work! I haven’t got much to add beyond what’s already been said, but I just wanted to say congrats! You’ve done an excellent job on this!",
          commentid: 4,
        },
      ],
    },
    {
      likes: 0,
      content: "@ramsesmiron I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      id: 2,
      username: "juliusomo 2 days ago",
      comments: [],
    },
    {
      likes: 0,
      content: "@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.",
      id: 3,
      username: "Hend",
      comments: [
        {
          commentContent: "Great work! I haven’t got much to add beyond what’s already been said, but I just wanted to say congrats! You’ve done an excellent job on this!",
          commentid: 1,
        },
        {
          commentContent: "Great work! I haven’t got much to add beyond what’s already been said, but I just wanted to say congrats! You’ve done an excellent job on this!",
          commentid: 2,
        },
        {
          commentContent: "Great work! I haven’t got much to add beyond what’s already been said, but I just wanted to say congrats! You’ve done an excellent job on this!",
          commentid: 3,
        },
      
      ],
    },
  ]);

  //Function resoponsaible for creating and appeding the new post inside the array of objects that hold all the posts
  function addNewPost(PostContent) {
    //Create new object with the same keys of the original one
    let newPostObject = {
      likes: 0,
      content: PostContent,
      id: ArrayOfObjects.length + 1,
      username: "AHMED",
      comments: [],
    };

    //Create new Array of objects and put inside all the old values + the new object
    let newArrayofobjects = [...ArrayOfObjects, newPostObject];

    //Update the state using the setArrayofobjects method
    setArrayOfObjects(newArrayofobjects);
  }

  //Function responsible for delting the selected post from the orignal array of object
  function deleteItem(PostId) {
    const newArrayAfterDelete = ArrayOfObjects.filter((post) => {
      return post.id != PostId;
    });
    setArrayOfObjects(newArrayAfterDelete);
  }

  //Function responsible for adding new comment under specfic post
  function addNewComment(commentContent, id) {
    let myOldPost = ArrayOfObjects.filter((post) => post.id == id)[0];
    let oldCommentCount = myOldPost.comments.length;
    let newCommentObject = {
      commentContent: commentContent,
      commentid: oldCommentCount + 1,
    };
    let newArrayAfterUpdate = ArrayOfObjects.map((currentPost) => {
      if (currentPost.id == id) {
        currentPost.comments.push(newCommentObject);
      }
      return currentPost;
    });
    setArrayOfObjects(newArrayAfterUpdate);
  }

  //Function responsible for deleting comments
  function deleteComment(postid, commentid) {
    let newArrayAfterCommentDelted = ArrayOfObjects.map((post) => {
      if (post.id == postid) {
        let newArrayOfComments = post.comments.filter((comment) => {
          return comment.commentid != commentid;
        });

        return { ...post, comments: newArrayOfComments };
      }

      return post;
    });

    setArrayOfObjects(newArrayAfterCommentDelted);
  }

  //Function responsible for updating comments
  function updateComment(NewContent, postid, commentid) {
    let newArrayAfterCommentUpdated = ArrayOfObjects.map((post) => {
      if (post.id == postid) {
        let newArrayofCommentsAfterUpdate = post.comments.map((comment) => {
          if (comment.commentid == commentid) {
            return { ...comment, commentContent: NewContent };
          }
          return comment;
        });

        post = { ...post, comments: newArrayofCommentsAfterUpdate };
      }

      return post;
    });

    setArrayOfObjects(newArrayAfterCommentUpdated);
  }
  return (
    <>
      <div id="PostsWrapper">
        {ArrayOfObjects.map((post) => {
          return (
            <Post
              UniqueID={post.id}
              key={post.id}
              likes={post.likes}
              content={post.content}
              username={post.username}
              comments={post.comments}
              addNewComment={addNewComment}
              delteItem={deleteItem}
              deleteComment={deleteComment}
              updateComment={updateComment}
            ></Post>
          );
        })}
      </div>

      <NewPost AddnewPostInsideArray={addNewPost}></NewPost>
    </>
  );
}

export default App;
