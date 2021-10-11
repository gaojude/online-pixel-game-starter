import React from "react";
import styled from "styled-components";
import { CellViewState } from "../viewStates/CellViewState";
import { observer } from "mobx-react";

interface IProps {
  cellViewState: CellViewState;
}

export const Cell: React.FC<IProps> = observer(({ cellViewState }) => {
  return (
    <CellElement
      onClick={cellViewState.place}
      color={
        cellViewState.value === 1
          ? "black"
          : cellViewState.value === 2
          ? "grey"
          : "white"
      }
    />
  );
});

const CellElement = styled.div<{
  color: string;
}>`
  width: 28px;
  height: 28px;
  box-sizing: border-box;
  border: 1px solid black;
  background: ${(props) => props.color};
`;
