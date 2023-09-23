import { useContext, useEffect } from "react";
import "../styles/cms.css";
import { CmsContext } from "../context/cmsContext";
import { CmsNav } from "./cms-nav";
import CmsView from "./cms-view";
import { AuthCheck } from "../../utils/authorize";

export const CMS = () => {
  const { setCurrView, user, loggedIn, setLoggedIn, tokenVerify, currView } =
    useContext(CmsContext);

  useEffect(() => {
    async function authView() {
      const authStatus = await tokenVerify();
      if (authStatus === 200 && loggedIn === false) {
        setLoggedIn(true);
        setCurrView("create");
      } else if (authStatus !== 200 && loggedIn === true) {
        setLoggedIn(false);
        setCurrView("login");
      }
      return;
    }
    if (user) {
      authView();
    }
  }, [user, currView]);

  return (
    <div id="cms-home">
      <h1>Blog API CMS</h1>
      {loggedIn && <CmsNav setCurrView={setCurrView} currView={currView} />}
      <CmsView />
      <button id="cms-test-token" onClick={() => AuthCheck(user)}>
        Test Token
      </button>
    </div>
  );
};
