import { useContext, useEffect } from "react";
import "../styles/cms.css";
import { CmsContext } from "../context/cmsContext";
import { CmsNav } from "./cms-nav";
import CmsView from "./cms-view";

export const CMS = () => {
  const { setCurrView, user, loggedIn, setLoggedIn } = useContext(CmsContext);

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
          return response.status;
        }

        console.log(results.message);
        return response.status;
      });
    }
    return;
  }

  useEffect(() => {
    // Maybe hit an API endpoint where it
    // literally verifies the token and returns a 200 status or unauthorized status
    // and have these setStates trigger upon the response
    if (user) {
      setLoggedIn(true);
      setCurrView("create");
    } else {
      setLoggedIn(false);
      setCurrView("login");
    }
  }, [loggedIn, setLoggedIn, user, setCurrView]);

  return (
    <div id="cms-home">
      <h1>Blog API CMS</h1>
      {loggedIn && <CmsNav setCurrView={setCurrView} />}
      <CmsView />
      <button id="cms-test-token" onClick={(e) => testToken(e)}>
        Test Token
      </button>
    </div>
  );
};
