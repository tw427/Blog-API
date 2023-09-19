import { useState, useEffect } from "react";
import "../styles/cms-login.css";

export const CmsLogin = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (user) {
      console.log(user.user[0].username);
    }
  }, [user]);

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
        return;
      }
    } catch (err) {
      console.log("Bad Login!");
    }
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
