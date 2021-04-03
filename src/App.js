import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTeamMember from "./pages/AddTeamMember";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Team}/>
        <Route path="/add" component={AddTeamMember}/>
      </Switch>
    </Router>
  );
}

export default App;
