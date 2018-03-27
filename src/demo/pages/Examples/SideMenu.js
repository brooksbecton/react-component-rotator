import React from "react";
import Paper from "material-ui/Paper";
import { MenuItem, MenuList } from "material-ui/Menu";
import styled from "styled-components";

const SideMenu = () => {
  return (
    <Paper>
      <MenuList>
        <A href="#basic">
          <MenuItem>Basic</MenuItem>
        </A>
        <A href="#inc-interval">
          <MenuItem>Increase Interval</MenuItem>
        </A>
        <A href="#start-delay">
          <MenuItem>Start Delay</MenuItem>
        </A>
      </MenuList>
    </Paper>
  );
};

const A = styled.a`
  text-decoration: none;
`;

export default SideMenu;
