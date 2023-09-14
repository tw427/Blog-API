import "../styles/cms-nav.css";

const CmsNav = () => {
  return (
    <nav id="cms-nav">
      <button id="cms-create" className="cms-button cms-active">
        Create
      </button>
      <button id="cms-delete" className="cms-button cms-inactive">
        Delete
      </button>
      <button id="cms-update" className="cms-button cms-inactive">
        Update
      </button>
      <button id="cms-view-all" className="cms-button cms-inactive">
        View Posts
      </button>
    </nav>
  );
};

export default CmsNav;
