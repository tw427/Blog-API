import { useContext } from "react";
import "../styles/cms-view.css";
import CmsCreate from "./cms-createform";
import { CmsViewAll } from "./cms-viewall";
import { CmsLogin } from "./cms-login";
import { CmsContext } from "../context/cmsContext";
import { UpdateForm } from "./cms-updateForm";

const CmsView = () => {
  const { currView, post } = useContext(CmsContext);

  return (
    <main id="cms-view">
      {currView === "login" && <CmsLogin />}
      {currView === "create" && <CmsCreate />}
      {currView === "updateForm" && <UpdateForm post={post} />}
      {["viewAll", "delete", "update"].includes(currView) && <CmsViewAll />}
    </main>
  );
};

export default CmsView;
