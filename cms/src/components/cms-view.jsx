import { useContext } from "react";
import "../styles/cms-view.css";
import CmsCreate from "./cms-createform";
import { CmsViewAll } from "./cms-viewall";
import { CmsLogin } from "./cms-login";
import { CmsContext } from "../context/cmsContext";

const CmsView = () => {
  const { currView } = useContext(CmsContext);

  return (
    <main id="cms-view">
      {currView === "login" && <CmsLogin />}
      {currView === "create" && <CmsCreate />}
      {["viewAll", "delete", "update"].includes(currView) && <CmsViewAll />}
    </main>
  );
};

export default CmsView;
