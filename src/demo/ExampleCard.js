import React from "react";
import Paper from "material-ui/Paper";
import styled from "styled-components";

const ExampleCard = ({ children }) => {
  return <StyledPaper>{children}</StyledPaper>;
};

const StyledPaper = styled(Paper)`
  padding: 3%;
  margin-bottom 6%;
`;

export default ExampleCard;
