import "../styles/cms-form-styles.css";
import { useContext, useEffect } from "react";
import { CmsContext } from "../context/cmsContext";
import { FormTemplate } from "./cms-formTemplate";

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
        <FormTemplate />
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
