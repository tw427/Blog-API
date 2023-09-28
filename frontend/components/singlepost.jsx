import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { FeContext } from "../src/context/feContext";
import "../styles/singlepost.css";

export const SinglePost = () => {
  const { postId } = useParams();
  const { allPosts } = useContext(FeContext);
  const uniquePost = allPosts.find((post) => post._id === postId);
  const [comments, setComments] = useState([]);

  async function postComment(e) {
    e.preventDefault();
    const formData = new FormData(document.getElementById("comment-form"));
    const data = new URLSearchParams(formData);
    const response = await fetch(
      `http://localhost:3000/api/comments/create/${postId}`,
      {
        method: "POST",
        mode: "cors",
        body: data,
      }
    );

    updateComments();
    const result = await response.json();
    return result;
  }

  async function updateComments() {
    const getPosts = await fetch("http://localhost:3000/api/post/list", {
      method: "GET",
      mode: "cors",
    });

    const results = await getPosts.json();
    const post = results.find((item) => item._id === postId);
    setComments(post.comments);
  }

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <>
      {uniquePost && (
        <>
          <img src={uniquePost.image} id="single-post-image"></img>
          <div
            id="single-post-title"
            onClick={() => console.log(comments, uniquePost)}
          >
            <p>{uniquePost.title}</p>
          </div>
          <div id="single-post-body">
            <p>{uniquePost.body}</p>
          </div>
          {comments &&
            comments.map((comment) => {
              return (
                <div className="comment-container" key={comment._id}>
                  <p>{comment.author}</p>
                  <p>{comment.comment}</p>
                </div>
              );
            })}
          <form
            method="POST"
            onSubmit={(e) => postComment(e)}
            id="comment-form"
          >
            <label htmlFor="author">
              <input
                name="author"
                id="author"
                type="text"
                placeholder="Author"
                minLength={2}
                maxLength={30}
              ></input>
            </label>
            <label htmlFor="comment">
              <textarea
                id="comment"
                name="comment"
                minLength={2}
                maxLength={255}
                placeholder="Comment (255 char. max)"
              ></textarea>
            </label>
            <button id="comment-submit" type="submit">
              Comment
            </button>
          </form>
        </>
      )}
      <div>
        {!uniquePost && <h1>Something went wrong with loading our post!</h1>}
      </div>
    </>
  );
};
