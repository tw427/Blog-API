import { useContext } from "react";
import "../styles/cms-login.css";
import { CmsContext } from "../context/cmsContext";

export const CmsLogin = () => {
  const { setUser } = useContext(CmsContext);

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
        // console.log(result.message);
        return;
      }
      // console.log(result);
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
    </form>
  );
};
