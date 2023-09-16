import { useContext, useEffect } from "react";
import "../styles/cms-viewall.css";
import { CmsContext } from "../context/cmsContext";

export const CmsViewAll = () => {
  const { allPosts, setAllPosts } = useContext(CmsContext);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     const getPosts = await fetch("http:localhost:3000/api/post/list");
  //   }
  // }, []);

  return (
    <main id="viewall-main">
      <div className="viewall-test"></div>
      <div className="viewall-test"></div>
      <div className="viewall-test"></div>
    </main>
  );
};
