import { useContext, useEffect } from "react";
import "../styles/cms-viewall.css";
import { CmsContext } from "../context/cmsContext";
import { fetchPosts } from "../../utils/getAllPosts";

export const CmsViewAll = () => {
  const { allPosts, setAllPosts, currView } = useContext(CmsContext);

  useEffect(() => {
    (async function () {
      await fetchPosts(setAllPosts);
    })();
  }, [setAllPosts]);

  function renderPosts() {
    const posts = [];

    allPosts.forEach((post) => {
      let trimBody = post.body;
      let trimTitle = post.title;
      if (post.body.length > 40) {
        trimBody = post.body.substr(0, 40) + "...";
      }

      if (post.title.length > 27) {
        trimTitle = post.title.substr(0, 27) + "...";
      }
      posts.push(
        <div className="post-view-card" key={post._id}>
          <div className="post-view-title">{trimTitle}</div>
          <hr></hr>
          <div className="post-view-body">
            <p>{trimBody}</p>
          </div>
          <div className="post-options">
            {currView === "viewAll" && (
              <>
                <button className="post-link-button">View Post</button>
                <p>{`${post.published}`}</p>
              </>
            )}
            {currView === "delete" && (
              <button className="post-delete-button">Delete</button>
            )}
            {currView === "update" && (
              <button className="post-update-button">Update</button>
            )}
          </div>
        </div>
      );
    });

    return posts;
  }

  return <main id="viewall-main">{renderPosts()}</main>;
};
