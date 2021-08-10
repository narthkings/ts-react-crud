import React from "react";
import { Container } from "reactstrap";
import { HeaderContainer } from "../src/components/HeaderComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";

function App() {
  return (
    <>
      <HeaderContainer />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
