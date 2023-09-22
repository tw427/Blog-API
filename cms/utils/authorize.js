export async function AuthCheck(user) {
  const finalStatus = await fetch("http://localhost:3000/api/user/delete", {
    method: "POST",
    mode: "cors",
    headers: {
      authorization: "Bearer " + user.token,
    },
  }).then(async (response) => {
    if (response.status !== 200) {
      return response.status;
    }

    return response.status;
  });

  return finalStatus;
}
