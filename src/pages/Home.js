import Search from "../components/Search";
import Users from "../components/User/Users";
import Alert from "../components/Common/Alert";
import { useContext, useEffect } from "react";
import GithubContext from "../context/github/githubContext";

const Home = () => {
  const { clearUsers } = useContext(GithubContext);
  useEffect(() => {
    clearUsers();
  }, []);

  return (
    <>
      <Search />
      <Alert />
      <Users />
    </>
  );
};

export default Home;
