import "../styles/cms-nav.css";

const CmsNav = () => {
  function changeBtnState(btn) {
    if (btn.target.className.includes("cms-active")) {
      return;
    }
    const activeBtn = document.querySelector(".cms-active");

    activeBtn.classList.remove("cms-active");
    activeBtn.classList.add("cms-inactive");
    btn.target.classList.remove("cms-inactive");
    btn.target.classList.add("cms-active");
  }
  return (
    <nav id="cms-nav">
      <button
        id="cms-create"
        className="cms-button cms-active"
        onClick={(btn) => changeBtnState(btn)}
      >
        Create
      </button>
      <button
        id="cms-delete"
        className="cms-button cms-inactive"
        onClick={(btn) => changeBtnState(btn)}
      >
        Delete
      </button>
      <button
        id="cms-update"
        className="cms-button cms-inactive"
        onClick={(btn) => changeBtnState(btn)}
      >
        Update
      </button>
      <button
        id="cms-view-all"
        className="cms-button cms-inactive"
        onClick={(btn) => changeBtnState(btn)}
      >
        View Posts
      </button>
    </nav>
  );
};

export default CmsNav;
