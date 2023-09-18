import { useContext, useEffect } from "react";
import "../styles/cms-viewall.css";
import { CmsContext } from "../context/cmsContext";

export const CmsViewAll = () => {
  const { allPosts, setAllPosts } = useContext(CmsContext);

  useEffect(() => {
    async function fetchPosts() {
      const getPosts = await fetch("http://localhost:3000/api/post/list", {
        method: "GET",
        mode: "cors",
      });

      const results = await getPosts.json();
      setAllPosts(results);
    }
    fetchPosts();
  }, [setAllPosts]);

  function renderPosts() {
    const posts = [];

    allPosts.forEach((post) => {
      let trimBody = post.body;
      let trimTitle = post.title;
      if (post.body.length > 27) {
        trimBody = post.body.substr(0, 27) + "...";
      }

      if (post.title.length > 12) {
        trimTitle = post.title.substr(0, 12) + "...";
      }
      posts.push(
        <div className="post-view-card" key={post._id}>
          <div className="post-view-title">{trimTitle}</div>
          <hr></hr>
          <div className="post-view-body">{trimBody}</div>
          <button className="post-link-button">View Post</button>
        </div>
      );
    });

    return posts;
  }

  return <main id="viewall-main">{renderPosts()}</main>;
};
