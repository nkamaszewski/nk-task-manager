import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/start" exact children={<div>start</div>} />
      <Route path="/list" exact children={<div>list</div>} />
      <Redirect to="/start" />
    </Switch>
  );
};

export default App;
