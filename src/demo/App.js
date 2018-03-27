import AppBar from "material-ui/AppBar";
import Grid from "material-ui/Grid";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import CssBaseline from "material-ui/CssBaseline";
import React from "react";
import Highlight from "react-highlight";
import styled from "styled-components";
import ExampleCard from "./ExampleCard";
import RightMenu from "./RightMenu";
import { ComponentRotator } from "../lib";

const App = () => (
  <div>
    <CssBaseline />
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          React Component Rotator
        </Typography>
      </Toolbar>
    </AppBar>

    <MainContainer>
      <h1>React Component Rotator</h1>
      <h2>About</h2>
      <ExampleCard>
        <h3>What is it?</h3>
        <p>
          React Component Rotator is a React component (<em>No Way!</em>) that
          can rotate display of it's children. The children can be homogeneous
          or heterogeneous in their types
        </p>
        <p>This means you can pass:</p>
        <ul>
          <li>JavaScript Basic Types</li>
          <li>DOM Elements</li>
          <li>Other React Componenents</li>
          <li>A mix of all of the above</li>
          <li>or anything else JSX can display!</li>
        </ul>

        <h3>Why?</h3>
        <p>
          It is easy to start getting React to swap out elements useing
          something like setInterval/setTimout, but if you are not careful you
          may be creating the listeners on each render of a component
        </p>
        <p>
          React Componenent Rotator takes care of this by cleaning up after
          itself when setting up intervals and timeouts, creating one place to
          handle this set up and tear down logic
        </p>
      </ExampleCard>
      <h2>Examples</h2>

      <Grid container spacing={24}>
        <Grid item xs={12} md={3}>
          <RightMenu />
        </Grid>

        <Grid item xs={12} md={9}>
          <ExampleCard>
            <h2 id="basic">Basic</h2>
            <ComponentRotator children={["cash", "rules", "everything"]} />

            <Highlight className="javascript">
              {`<ComponentRotator children={["cash", "rules", "everything"]} />`}
            </Highlight>
          </ExampleCard>

          <ExampleCard>
            <h2 id="inc-interval">Different interval delay</h2>
            <p>Take 3 times as long to switch between it's children</p>
            <ComponentRotator
              children={["cash", "rules", "everything"]}
              delay={3000}
            />
            <Highlight className="javascript">
              {`<ComponentRotator children={["cash", "rules", "everything"]} delay={3000} />`}
            </Highlight>
          </ExampleCard>

          <ExampleCard>
            <h2 id="start-delay">Start Delay </h2>
            <p>Takes 3 seconds to start rotating children at the normal rate</p>
            <ComponentRotator
              children={["cash", "rules", "everything"]}
              startDelay={3000}
            />

            <Highlight className="javascript">
              {`<ComponentRotator children={["cash", "rules", "everything"]} startDelay={3000} />`}
            </Highlight>
          </ExampleCard>
        </Grid>
      </Grid>
    </MainContainer>
  </div>
);

const MainContainer = styled.div`
  background-color: gainsboro;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 3%;
`;

export default App;
