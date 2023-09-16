import "../styles/cms-createform.css";

const CmsCreate = () => {
  async function createPost() {
    await fetch("http://localhost:3000/api/post/create", {
      method: "POST",
      mode: "cors",
      url: "http://localhost:3000",
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.json());
          return res.json();
        }
      })
      .catch((err) => console.log(err));
  }
  // onClick={() => createPost()}

  return (
    <form
      id="post-form"
      action="http://localhost:3000/api/post/create"
      method="POST"
    >
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
  );
};

export default CmsCreate;
