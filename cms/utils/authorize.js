export async function AuthCheck(user) {
  if (user) {
    const finalStatus = await fetch("http://localhost:3000/api/user/auth", {
      method: "POST",
      mode: "cors",
      headers: {
        authorization: "Bearer " + user.token,
      },
    }).then(async (response) => {
      const results = await response.json();
      if (response.status !== 200) {
        console.log(results.message);
        return response.status;
      }

      console.log(results.message);
      return response.status;
    });

    return finalStatus;
  }
  return;
}
