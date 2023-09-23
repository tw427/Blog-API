import "../styles/cms-form-styles.css";
import { useContext, useEffect, useState } from "react";
import { CmsContext } from "../context/cmsContext";
import { FormTemplate } from "./cms-formTemplate";
import PropTypes from "prop-types";

export const UpdateForm = (props) => {
  const [fetchStatus, setFetchStatus] = useState("");
  const { setCurrView } = useContext(CmsContext);
  const { post } = props;

  UpdateForm.propTypes = {
    post: PropTypes.object,
  };

  useEffect(() => {}, [fetchStatus]);

  async function updatePost(e, id) {
    e.preventDefault();
    const formData = new FormData(document.getElementById("update-form"));
    const data = new URLSearchParams(formData);

    await fetch(`http://localhost:3000/api/post/update/${id}`, {
      method: "POST",
      mode: "cors",
      body: data,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setFetchStatus(result.message);
      });
  }

  return (
    <>
      <span>{fetchStatus}</span>
      <form id="update-form" onSubmit={(e) => updatePost(e, post._id)}>
        <FormTemplate post={post} />
        <div id="post-form-btns">
          <button id="updateBtn" type="submit">
            Update
          </button>
          <button id="secondaryBtn" onClick={() => setCurrView("update")}>
            Back
          </button>
        </div>
      </form>
    </>
  );
};
