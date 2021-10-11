import React from "react";
import { GridViewState } from "../viewStates/GridViewState";
import styled from "styled-components";
import { Row } from "./Row";
import { observer } from "mobx-react";

interface IProps {
  gridViewState: GridViewState;
}

export const Grid: React.FC<IProps> = observer(({ gridViewState }) => {
  return (
    <GridContainer>
      {gridViewState.rowViewStates.map((rowViewState, index) => (
        <Row key={index} rowViewState={rowViewState} />
      ))}
    </GridContainer>
  );
});

const GridContainer = styled.div`
  width: fit-content;
  border: 1px black solid;
`;
