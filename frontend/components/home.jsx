import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FeContext } from "../src/context/feContext";

export const Home = () => {
  const blogImg = "../src/assets/blogimg.png";
  const { allPosts, setAllPosts } = useContext(FeContext);
  const [leftPosts, setLeftPosts] = useState([]);
  const [rightPosts, setRightPosts] = useState([]);

  async function fetchPostData() {
    const getPosts = await fetch("http://localhost:3000/api/post/list", {
      method: "GET",
      mode: "cors",
    });

    const results = await getPosts.json();
    setAllPosts(results);
    console.log("H");
    return results;
  }

  function createPosts() {
    let left = [];
    let right = [];
    let posts = [];

    allPosts.forEach((post) => {
      posts.push(
        <div className="post" key={post._id} id={post._id}>
          <div className="image-container">
            <Link className="post-title" to={`post/${post._id}`}>
              {post.title}
            </Link>
            <img className="post-image" src={blogImg}></img>
          </div>
        </div>
      );
    });

    for (let i = 0; i < posts.length; i++) {
      if (i % 2 === 0) {
        left.push(posts[i]);
      } else {
        right.push(posts[i]);
      }
    }

    setLeftPosts(left);
    setRightPosts(right);
  }

  useEffect(() => {
    fetchPostData();
  }, []);

  useEffect(() => {
    createPosts();
  }, [allPosts]);

  return (
    <>
      <main id="view-home">
        <section id="left-home">
          {leftPosts.map((el) => {
            return el;
          })}
        </section>
        <section id="right-home">
          {rightPosts.map((el) => {
            return el;
          })}
        </section>
      </main>
    </>
  );
};
