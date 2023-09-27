import { useParams } from "react-router-dom";
import { useContext } from "react";
import { FeContext } from "../src/context/feContext";
import "../styles/singlepost.css";

export const SinglePost = () => {
  const { postId } = useParams();
  const { allPosts } = useContext(FeContext);
  const uniquePost = allPosts.find((post) => post._id === postId);
  const postImg = document
    .getElementById(`${postId}`)
    .getElementsByTagName("img");

  return (
    <>
      <div>
        <h1>Hello World !</h1>
        <p>The post ID is: {postId}</p>
      </div>
      <img src={postImg[0].src} id="single-post-image"></img>
      <p>{uniquePost.title}</p>
    </>
  );
};
