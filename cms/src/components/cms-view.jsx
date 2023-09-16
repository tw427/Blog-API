import { useContext } from "react";
import "../styles/cms-view.css";
import CmsCreate from "./cms-createform";
import { CmsViewAll } from "./cms-viewall";
import { CmsContext } from "../context/cmsContext";

const CmsView = () => {
  const { currView } = useContext(CmsContext);

  return (
    <main id="cms-view">
      {currView === "create" && <CmsCreate />}
      {currView === "viewAll" && <CmsViewAll />}
    </main>
  );
};

export default CmsView;
