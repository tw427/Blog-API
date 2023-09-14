import "../styles/cms.css";
import CmsNav from "./cms-nav";
import CmsView from "./cms-view";

export const CMS = () => {
  return (
    <div id="cms-home">
      <CmsNav />
      <CmsView />
    </div>
  );
};
