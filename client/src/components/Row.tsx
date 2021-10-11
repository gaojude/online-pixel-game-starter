import React from "react";
import { RowViewState } from "../viewStates/RowViewState";
import styled from "styled-components";
import { Cell } from "./Cell";
import { observer } from "mobx-react";

interface IProps {
  rowViewState: RowViewState;
}

export const Row: React.FC<IProps> = observer(({ rowViewState }) => {
  return (
    <RowContainer>
      {rowViewState.cellViewStates.map((cellViewState, index) => (
        <Cell key={index} cellViewState={cellViewState} />
      ))}
    </RowContainer>
  );
});

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
