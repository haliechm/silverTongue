import "./App.css";
import { Route, Switch } from "react-router-dom";
import {Home, Login, Register, Profile} from "./components";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    </div>
  );
}

export default App;
