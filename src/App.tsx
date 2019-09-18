import React from "react";
import { Switch, Route, Redirect } from "react-router";
import StartPage from "./components/start/StartPage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/start" exact children={<StartPage />} />
      <Route path="/list" exact children={<div>list</div>} />
      <Redirect to="/start" />
    </Switch>
  );
};

export default App;
