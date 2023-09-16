import { createContext, useState } from "react";
import { CMS } from "../components/cms";
export const CmsContext = createContext();

const CmsContextProvider = () => {
  const [currView, setCurrView] = useState("create");
  const [allPosts, setAllPosts] = useState({});

  return (
    <CmsContext.Provider
      value={{
        currView: currView,
        setCurrView: setCurrView,
        allPosts: allPosts,
        setAllPosts: setAllPosts,
      }}
    >
      <CMS />
    </CmsContext.Provider>
  );
};

export default CmsContextProvider;
