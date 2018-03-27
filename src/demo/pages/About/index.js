import React from "react";
import styled from "styled-components";
import ExampleCard from "./../../components/ExampleCard";

const Home = () => {
  return (
    <AboutWrapper>
      <h1>About</h1>
      <ExampleCard>
        <h2>What is it?</h2>
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

        <h2>Why?</h2>
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
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  min-height: 100vh;
`;

export default Home;
