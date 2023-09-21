import { createContext, useState } from "react";
import { CMS } from "../components/cms";
export const CmsContext = createContext();

const CmsContextProvider = () => {
  const [currView, setCurrView] = useState("login");
  const [allPosts, setAllPosts] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("");

  return (
    <CmsContext.Provider
      value={{
        currView: currView,
        setCurrView: setCurrView,
        allPosts: allPosts,
        setAllPosts: setAllPosts,
        fetchStatus: fetchStatus,
        setFetchStatus: setFetchStatus,
      }}
    >
      <CMS />
    </CmsContext.Provider>
  );
};

export default CmsContextProvider;