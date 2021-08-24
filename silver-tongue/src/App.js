import "./App.css";
import { Route, Switch } from "react-router-dom";
import {Home, Login} from "./components";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
