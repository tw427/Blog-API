import { createContext, useState } from "react";
import Router from "../Router";
export const FeContext = createContext();

const FeContextProvider = () => {
  const [allPosts, setAllPosts] = useState([]);

  return (
    <FeContext.Provider
      value={{
        allPosts: allPosts,
        setAllPosts: setAllPosts,
      }}
    >
      <Router />
    </FeContext.Provider>
  );
};

export default FeContextProvider;
