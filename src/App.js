import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import "./styles.css";
import Home from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import DetailPost from "./Pages/DetailPost";
import UpdatePost from "./Pages/UpdatePost";
import AddPost from "./Pages/AddPost";
import history from "./history";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Router history={history}>
        <Switch>
          <Route path={"/"} exact={true} component={Home} />
          <Route path={"/login"} component={Login} />
          <Route path={"/signup"} component={Signup} />
          <Route path={"/add-post"} component={AddPost} />
          <Route path={"/detail-post"} component={DetailPost} />
          <Route post={"/update-post"} component={UpdatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
