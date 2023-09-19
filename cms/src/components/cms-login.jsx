import { useState } from "react";
import "../styles/cms-login.css";

export const CmsLogin = () => {
  const [user, setUser] = useState([]);

  async function loginAPI(event) {
    event.preventDefault();
    try {
      const formData = new FormData(document.getElementById("cms-login-form"));
      const data = new URLSearchParams(formData);
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        mode: "cors",
        body: data,
      });

      const results = await response.json();

      if (response.status === 200) {
        setUser(results);
        console.log(results);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form id="cms-login-form" onSubmit={(e) => loginAPI(e)}>
      <label htmlFor="cmsUsername">
        <input
          type="text"
          id="cmsUsername"
          name="cmsUsername"
          placeholder="Username"
        />
      </label>
      <label htmlFor="cmsPassword">
        <input
          type="password"
          id="cmsPassword"
          name="cmsPassword"
          placeholder="Password"
        />
      </label>
      <button type="submit" id="cms-login-btn">
        Login
      </button>
    </form>
  );
};
