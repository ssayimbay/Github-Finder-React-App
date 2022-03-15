import { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import Loading from "../Common/Loading";
import User from "./User";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  if (loading) return <Loading />;
  return (
    <div className="container mt-3">
      <div className="row">
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
