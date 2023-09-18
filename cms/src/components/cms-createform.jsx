import "../styles/cms-createform.css";
import { useContext, useEffect } from "react";
import { CmsContext } from "../context/cmsContext";

const CmsCreate = () => {
  const { fetchStatus, setFetchStatus } = useContext(CmsContext);
  useEffect(() => {}, [fetchStatus]);

  async function createPost(event) {
    event.preventDefault();
    try {
      const formData = new FormData(document.getElementById("post-form"));
      const data = new URLSearchParams(formData);
      const response = await fetch("http://localhost:3000/api/post/create", {
        method: "POST",
        mode: "cors",
        body: data,
      });

      if (response.status === 200) {
        setFetchStatus("Success! Post created.");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <span>{fetchStatus}</span>
      <form id="post-form" onSubmit={(e) => createPost(e)}>
        <label htmlFor="postTitle">
          <input
            id="postTitle"
            name="postTitle"
            type="text"
            placeholder="Title of post"
            minLength={4}
          ></input>
        </label>
        <label htmlFor="postBody">
          <textarea
            id="postBody"
            name="postBody"
            placeholder="(Max chars. 427)"
            minLength={4}
            maxLength={427}
          ></textarea>
        </label>
        <div id="post-form-btns">
          <button id="postBtn" type="submit">
            Post
          </button>
          <button id="clearBtn">Clear</button>
        </div>
      </form>
    </>
  );
};

export default CmsCreate;
