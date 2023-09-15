import "../styles/cms-createform.css";

const CmsCreate = () => {
  return (
    <form id="post-form">
      <label htmlFor="post-title">
        <input
          id="post-title"
          name="post-title"
          type="text"
          placeholder="Title of post"
        ></input>
      </label>
      <label htmlFor="post-body">
        <textarea
          id="post-body"
          name="post-body"
          placeholder="(Max chars. 427)"
          minLength={25}
          maxLength={427}
        ></textarea>
      </label>
      <div id="post-form-btns">
        <button id="postBtn">Post</button>
        <button id="clearBtn">Clear</button>
      </div>
    </form>
  );
};

export default CmsCreate;
