import { action, makeObservable, observable } from "mobx";
import { SocketState } from "../sockets/SocketState";

export class CellViewState {
  filled: boolean = false;

  value = 0;

  constructor(private i: number, private j: number) {
    makeObservable(this, {
      filled: observable,
      value: observable,
      toggleFilled: action,
      setValue: action,
    });
  }

  toggleFilled = () => {
    this.filled = !this.filled;
  };

  place = () => {
    SocketState.get().place(this.i, this.j);
  };

  setValue = (value: number) => {
    this.value = value;
  };
}
