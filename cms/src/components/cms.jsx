import { useContext, useEffect, useState } from "react";
import "../styles/cms.css";
import { CmsContext } from "../context/cmsContext";
import { CmsNav } from "./cms-nav";
import CmsView from "./cms-view";

export const CMS = () => {
  const { setCurrView } = useContext(CmsContext);
  const { loggedIn, setLoggedIn } = useState(false);

  useEffect(() => {
    // Hit our API's index route "/"
    async function fetchIndex() {
      const index = await fetch("http://localhost:3000/api/", {
        method: "GET",
        mode: "cors",
      });

      const results = await index.json();

      if (results === "nouser") {
        console.log("Not logged in");
        console.log(results);
        return;
      }

      setLoggedIn(true);
    }
    fetchIndex();
  }, [loggedIn, setLoggedIn]);

  return (
    <div id="cms-home">
      <h1>Blog API CMS</h1>
      {loggedIn && <CmsNav setCurrView={setCurrView} />}
      <CmsView />
    </div>
  );
};
