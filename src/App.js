import './App.css';
import Home from './home';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Favourites from './favourite/index';
import Rejected from './Rejected/index';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/shortlist" component={Favourites}></Route>
            <Route path="/rejected" component={Rejected}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
