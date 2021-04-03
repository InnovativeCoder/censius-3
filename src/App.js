import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" component={Team}/>
      </Switch>
    </Router>
  );
}

export default App;
