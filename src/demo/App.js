import AppBar from "material-ui/AppBar";
import Button from "material-ui/Button";
import CssBaseline from "material-ui/CssBaseline";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Link from "./components/Link";
import About from "./pages/About/";
import Examples from "./pages/Examples/";

const App = () => (
  <Router>
    <div>
      <CssBaseline />
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ flex: 1 }}>
            React Component Rotator
          </Typography>
          <Button color="inherit">
            <Link to="/examples">Examples</Link>
          </Button>
          <Button color="inherit">
            <Link to="/about">About</Link>
          </Button>
        </Toolbar>
      </AppBar>

      <MainContainer>
        <Route exact path="/" component={Examples} />
        <Route exact path="/about" component={About} />
        <Route exact path="/examples" component={Examples} />
      </MainContainer>
    </div>
  </Router>
);

const MainContainer = styled.div`
  background-color: gainsboro;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 3%;
`;

export default App;
