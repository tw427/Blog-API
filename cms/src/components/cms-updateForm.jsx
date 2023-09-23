import "../styles/cms-form-styles.css";
import { useContext, useEffect, useState } from "react";
import { CmsContext } from "../context/cmsContext";
import { FormTemplate } from "./cms-formTemplate";
import PropTypes from "prop-types";

export const UpdateForm = (props) => {
  const [fetchStatus, setFetchStatus] = useState("");
  const { post } = props;

  UpdateForm.propTypes = {
    post: PropTypes.object,
  };

  useEffect(() => {}, [fetchStatus]);

  async function updatePost(e) {
    e.preventDefault();
  }

  return (
    <>
      <span>{fetchStatus}</span>
      <form id="update-form" onSubmit={(e) => updatePost(e)}>
        <FormTemplate post={post} />
        <div id="post-form-btns">
          <button id="updateBtn" type="submit">
            Update
          </button>
          <button id="clearBtn">Clear</button>
        </div>
      </form>
    </>
  );
};
