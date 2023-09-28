import { useParams } from "react-router-dom";
import { useContext } from "react";
import { FeContext } from "../src/context/feContext";
import "../styles/singlepost.css";

export const SinglePost = () => {
  const { postId } = useParams();
  const { allPosts } = useContext(FeContext);
  const uniquePost = allPosts.find((post) => post._id === postId);

  return (
    <>
      {uniquePost && (
        <>
          <img src={uniquePost.image} id="single-post-image"></img>
          <div id="single-post-title">
            <p>{uniquePost.title}</p>
          </div>
          <div id="single-post-body">
            <p>{uniquePost.body}</p>
          </div>
          {/* Add comments here dynamically from API */}
          <form
            method="POST"
            onSubmit={() => console.log("Add fetch function")}
            id="comment-form"
          >
            <label htmlFor="author">
              <input
                name="author"
                id="author"
                type="text"
                placeholder="Author"
              ></input>
            </label>
            <label htmlFor="comment">
              <textarea
                id="comment"
                name="comment"
                minLength={1}
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
