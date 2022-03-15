import React from "react";
import GithubState from "../context/github/githubState";
import AlertState from "../context/alert/alertState";
import AppRouter from "../routers/AppRouter";

const App = () => {
  return (
    <AlertState>
      <GithubState>
        <AppRouter />
      </GithubState>
    </AlertState>
  );
};

export default App;
