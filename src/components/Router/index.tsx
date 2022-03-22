import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
