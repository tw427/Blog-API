import { useContext } from "react";
import "../styles/cms.css";
import { CmsContext } from "../context/cmsContext";
import { CmsNav } from "./cms-nav";
import CmsView from "./cms-view";

export const CMS = () => {
  const { setCurrView } = useContext(CmsContext);

  return (
    <div id="cms-home">
      <h1>Blog API CMS</h1>
      <CmsNav setCurrView={setCurrView} />
      <CmsView />
    </div>
  );
};
