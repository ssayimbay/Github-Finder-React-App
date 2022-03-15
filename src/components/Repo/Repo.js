import React from "react";

const Repo = ({ repo }) => {
  return (
    <li className="list-group-item">
      <i className="fa fa-book mr-2" aria-hidden="true"></i>{" "}
      <a href={repo.html_url}>{repo.name}</a>
    </li>
  );
};

export default Repo;
