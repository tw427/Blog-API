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
  }, []);

  console.log(allPosts);

  function renderPosts() {
    const posts = [];

    allPosts.forEach((post) => {
      posts.push(
        <div className="post-view-card">
          <div className="post-view-title">{post.title}</div>
          <div className="post-view-body">{post.body}</div>
        </div>
      );
    });

    return posts;
  }

  return <main id="viewall-main">{renderPosts}</main>;
};
