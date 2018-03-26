import React from "react";
import { ComponentRotator } from "../lib";

const App = () => (
  <div>
    <ComponentRotator children={["cash", "rules", "everything"]} />
  </div>
);

export default App;
