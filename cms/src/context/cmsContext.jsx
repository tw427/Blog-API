import { createContext, useState } from "react";
import { CMS } from "../components/cms";
export const CmsContext = createContext();

const CmsContextProvider = () => {
  const [currView, setCurrView] = useState("create");

  return (
    <CmsContext.Provider
      value={{
        currView: currView,
        setCurrView: setCurrView,
      }}
    >
      <CMS />
    </CmsContext.Provider>
  );
};

export default CmsContextProvider;
