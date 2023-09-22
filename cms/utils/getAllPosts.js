export async function fetchPosts(setAllPosts) {
  const getPosts = await fetch("http://localhost:3000/api/post/list", {
    method: "GET",
    mode: "cors",
  });

  const results = await getPosts.json();
  setAllPosts(results);
  return results;
}
