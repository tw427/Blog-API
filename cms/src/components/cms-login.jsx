import { useContext } from "react";
import "../styles/cms-login.css";
import { CmsContext } from "../context/cmsContext";

export const CmsLogin = () => {
  const { user, setUser } = useContext(CmsContext);

  // useEffect(() => {
  //   if (user) {
  //     console.log(user.user.username);
  //   }
  // }, [user]);

  async function testToken(e) {
    e.preventDefault();
    if (user) {
      await fetch("http://localhost:3000/api/user/delete", {
        method: "POST",
        mode: "cors",
        headers: {
          authorization: "Bearer " + user.token,
        },
      }).then(async (response) => {
        const results = await response.json();

        if (response.status !== 200) {
          console.log(results.message);
          return;
        }

        console.log(results.message);
        return;
      });
    }
    return;
  }

  async function loginAPI(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById("cms-login-form"));
    const data = new URLSearchParams(formData);
    await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      mode: "cors",
      body: data,
    }).then(async (response) => {
      const result = await response.json();

      if (response.status !== 200) {
        console.log(result.message);
        return;
      }
      console.log(result);
      setUser(result);
    });
  }

  return (
    <form id="cms-login-form" onSubmit={(e) => loginAPI(e)}>
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <button type="submit" id="cms-login-btn">
        Login
      </button>
      <button id="cms-test-token" onClick={(e) => testToken(e)}>
        Test Token
      </button>
    </form>
  );
};
