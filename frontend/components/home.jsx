import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FeContext } from "../src/context/feContext";

export const Home = () => {
  const { allPosts, setAllPosts } = useContext(FeContext);
  const [leftPosts, setLeftPosts] = useState([]);
  const [rightPosts, setRightPosts] = useState([]);

  function randomImage(results) {
    const img1 = "../src/assets/blogimg.png";
    const img2 = "../src/assets/blogimg2.jpg";
    const img3 = "../src/assets/blogimg3.png";
    const images = [img1, img2, img3];

    results.forEach((post) => {
      post.image = images[Math.floor(Math.random() * 3)];
    });

    return results;
  }

  async function fetchPostData() {
    const getPosts = await fetch("http://localhost:3000/api/post/list", {
      method: "GET",
      mode: "cors",
    });

    const results = await getPosts.json();
    const resultsWithImages = randomImage(results);
    setAllPosts(resultsWithImages);
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
            <img className="post-image" src={post.image}></img>
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
