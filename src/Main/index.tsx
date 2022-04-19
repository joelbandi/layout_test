/** @jsxImportSource @emotion/react */

import { Switch, Route, useLocation } from "react-router-dom";
import { Header } from "../Header";
import { PlatformNav, PracticeSettings } from "../LeftColumn";
import { QueuePage } from "../Pages/QueuePage";
import { PatientsPage } from "../Pages/PatientsPage";
import { Dashboard } from "../Dashboard";
import { flex } from "../Styles";

export const Main = () => {
  return (
    <Switch>
      <Route path="/practice-settings" component={Settings} />
      <Route path="/" component={App} />
    </Switch>
  );
};

const App = () => (
  <>
    <Header searchBar />
    <div css={[flex]}>
      <PlatformNav />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/queue" component={QueuePage} />
        <Route path="/patients" component={PatientsPage} />
      </Switch>
    </div>
  </>
);

const Settings = () => {
  const loc = useLocation();
  return (
    <>
      <Header searchBar={false} />
      <div css={[flex]}>
        <PracticeSettings />
        <span>Practice Settings @ {loc.pathname}</span>
      </div>
    </>
  );
};
