import PropTypes from "prop-types";
import "../styles/cms-nav.css";

export const CmsNav = (props) => {
  const { setCurrView, currView } = props;

  CmsNav.propTypes = {
    setCurrView: PropTypes.func,
    currView: PropTypes.string,
  };

  function handleClick(btn, newView) {
    if (currView !== newView) {
      setCurrView(`${newView}`);
      changeBtnState(btn);
    }
    return;
  }

  function changeBtnState(btn) {
    btn.preventDefault();
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
        onClick={(btn) => handleClick(btn, "create")}
      >
        Create
      </button>
      <button
        id="cms-delete"
        className="cms-button cms-inactive"
        onClick={(btn) => handleClick(btn, "delete")}
      >
        Delete
      </button>
      <button
        id="cms-update"
        className="cms-button cms-inactive"
        onClick={(btn) => handleClick(btn, "update")}
      >
        Update
      </button>
      <button
        id="cms-view-all"
        className="cms-button cms-inactive"
        onClick={(btn) => handleClick(btn, "viewAll")}
      >
        View Posts
      </button>
    </nav>
  );
};
