import React from "react";
import { Container } from "reactstrap";
import { HeaderContainer } from "../src/components/HeaderComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import AllUsers from "./pages/AllUsers";
import User from "./pages/User"

function App() {
  return (
    <>
      <Router>
        <HeaderContainer />
        <Container>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/all-users">
              <AllUsers />
            </Route>
            <Route path="/all-users/:id">
              <User />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
