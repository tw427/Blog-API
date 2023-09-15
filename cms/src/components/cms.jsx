import "../styles/cms.css";
import CmsNav from "./cms-nav";
import CmsView from "./cms-view";

export const CMS = () => {
  return (
    <div id="cms-home">
      <h1>Blog API CMS</h1>
      <CmsNav />
      <CmsView />
    </div>
  );
};
