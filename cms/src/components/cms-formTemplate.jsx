import PropTypes from "prop-types";

export const FormTemplate = (props) => {
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
        ></textarea>
      </label>
    </>
  );
};
