import socketIOClient, { Socket } from "socket.io-client";
import { makeObservable, observable, runInAction } from "mobx";
import { singletonGetter } from "../utils/singletonGetter";

const ENDPOINT = "http://localhost:4000";

export class SocketState {
  static get = singletonGetter(SocketState);

  connected: boolean = false;

  private readonly socket: Socket;

  constructor() {
    makeObservable(this, {
      connected: observable,
    });
    this.socket = socketIOClient(ENDPOINT);
  }

  init() {
    this.socket.on("connect", () => {
      runInAction(() => {
        this.connected = true;
      });
    });

    this.socket.on("disconnect", () => {
      runInAction(() => {
        this.connected = false;
      });
    });
  }

  place(i: number, j: number) {
    this.socket.emit("place", {
      i,
      j,
    });
  }

  setUpdateHandler(handler: (grid: number[][]) => void) {
    this.socket.on("update", handler);
  }
}
