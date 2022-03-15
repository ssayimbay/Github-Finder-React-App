import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Common/Loading";
import Repos from "../components/Repo/Repos";
import GithubContext from "../context/github/githubContext";

const UserDetails = ({ match }) => {
  const { login } = useParams();
  const { getUser, loading, user, repos, getUserRepos } =
    useContext(GithubContext);

  useEffect(() => {
    getUser(login);
    getUserRepos(login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    html_url,
    bio,
    blog,
    followers,
    following,
    public_repos,
  } = user;

  if (loading) return <Loading />;

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src={avatar_url} className="card-img-top" />
            <div className="card-body">
              <p className="card-text">{name}</p>
              {location && (
                <>
                  <p>
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {location}
                  </p>
                </>
              )}
              <p>
                <a className="btn btn-block btn-primary btn-sm" href={html_url}>
                  Github Profile
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              {bio && (
                <>
                  <h3>About</h3>
                  <p>{bio}</p>
                </>
              )}
              {blog && (
                <>
                  <h3>Blog</h3>
                  <p>{blog}</p>
                </>
              )}
              <div>
                <span className="badge badge-primary m-1 p-1">
                  Followers: {followers}
                </span>
                <span className="badge badge-danger m-1 p-1">
                  Following: {following}
                </span>
                <span className="badge badge-success m-1 p-1">
                  Repos: {public_repos}
                </span>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <Repos repos={repos} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
