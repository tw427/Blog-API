export async function fetchPosts(setAllPosts) {
  const getPosts = await fetch("http://localhost:3000/api/post/list", {
    method: "GET",
    mode: "cors",
  });

  const results = await getPosts.json();
  setAllPosts(results);
  return results;
}

export async function postDelete(id, setAllPosts) {
  await fetch(`http://localhost:3000/api/post/delete/${id}`, {
    method: "POST",
    mode: "cors",
  }).then((response) => {
    if (response.status === 200) {
      fetchPosts(setAllPosts);
    }
    return;
  });
}
