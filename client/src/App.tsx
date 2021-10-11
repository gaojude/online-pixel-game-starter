import React from "react";
import { Grid } from "./components/Grid";
import { GridViewState } from "./viewStates/GridViewState";
import styled from "styled-components";
import { SocketState } from "./sockets/SocketState";
import { observer } from "mobx-react";

class AppBase extends React.Component {
  private readonly gridViewState = new GridViewState(25, 25);

  componentDidMount() {
    SocketState.get().init();
    SocketState.get().setUpdateHandler(this.gridViewState.update);
  }

  render() {
    return (
      <div>
        <ul>
          <li>Connected: {SocketState.get().connected ? "true" : "false"}</li>
        </ul>
        <AppContainer>
          <Grid gridViewState={this.gridViewState} />
        </AppContainer>
      </div>
    );
  }
}

const AppContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const App = observer(AppBase);
