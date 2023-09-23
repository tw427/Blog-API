import { createContext, useState } from "react";
import { CMS } from "../components/cms";
import { AuthCheck } from "../../utils/authorize";
export const CmsContext = createContext();

const CmsContextProvider = () => {
  const [currView, setCurrView] = useState("login");
  const [allPosts, setAllPosts] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("");
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [post, setPost] = useState({});
  const tokenVerify = async () =>
    await AuthCheck(user).then((status) => status);

  return (
    <CmsContext.Provider
      value={{
        currView: currView,
        setCurrView: setCurrView,
        allPosts: allPosts,
        setAllPosts: setAllPosts,
        fetchStatus: fetchStatus,
        setFetchStatus: setFetchStatus,
        user: user,
        setUser: setUser,
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn,
        tokenVerify: tokenVerify,
        post: post,
        setPost: setPost,
      }}
    >
      <CMS />
    </CmsContext.Provider>
  );
};

export default CmsContextProvider;
