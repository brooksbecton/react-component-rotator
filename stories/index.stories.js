import React from "react";

import { storiesOf } from "@storybook/react";
import ComponentRotator from "./../src/lib/components/ComponentRotator";

const defaultTexts = ["Lie", "Cheat", "Steal"];
const defaultComponents = [<h2>Lie</h2>, <h2>Cheat</h2>, <h2>Steal</h2>];

storiesOf("ComponentRotator", module)
  .add("default", () => <ComponentRotator children={defaultTexts} />)
  .add("with delay", () => (
    <ComponentRotator delay={2000} children={defaultTexts} />
  ))
  .add("with startDelay", () => (
    <ComponentRotator startDelay={2500} children={defaultTexts} />
  ))
  .add("with component children", () => (
    <ComponentRotator children={defaultComponents} />
  ));
