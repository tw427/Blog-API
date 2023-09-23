import { useContext } from "react";
import PropTypes from "prop-types";
import { CmsContext } from "../context/cmsContext";

export const FormTemplate = (props) => {
  const { setPost } = useContext(CmsContext);
  const { post } = props;

  FormTemplate.propTypes = {
    post: PropTypes.object,
  };

  return (
    <>
      <label htmlFor="postTitle">
        <input
          id="postTitle"
          name="postTitle"
          type="text"
          placeholder="Title of post"
          minLength={4}
          value={post && post.title}
          onChange={(e) =>
            setPost({
              ...post,
              title: e.textContent,
            })
          }
        ></input>
      </label>
      <label htmlFor="postBody">
        <textarea
          id="postBody"
          name="postBody"
          placeholder="(Max chars. 427)"
          minLength={4}
          maxLength={427}
          value={post && post.body}
          onChange={(e) =>
            setPost({
              ...post,
              body: e.textContent,
            })
          }
        ></textarea>
      </label>
    </>
  );
};
