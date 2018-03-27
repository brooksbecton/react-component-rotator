import Grid from "material-ui/Grid";
import React from "react";
import Highlight from "react-highlight";
import { ComponentRotator } from "../../../lib";

import ExampleCard from "./../../components/ExampleCard";
import SideMenu from "./SideMenu";

const Examples = () => {
  return (
    <div>
      <h1>Examples</h1>

      <Grid container spacing={24}>
        <Grid item xs={12} md={3}>
          <SideMenu />
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
    </div>
  );
};

export default Examples;
