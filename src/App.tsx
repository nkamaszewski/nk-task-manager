import React from "react";
import { Switch, Route, Redirect } from "react-router";
import StartPage from "./components/start/StartPage";
import ListPage from "./components/list/ListPage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/start" exact children={<StartPage />} />
      <Route path="/list" exact children={<ListPage />} />
      <Redirect to="/start" />
    </Switch>
  );
};

export default App;
