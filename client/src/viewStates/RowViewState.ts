import { makeObservable, observable } from "mobx";
import { CellViewState } from "./CellViewState";
import { times } from "lodash";

export class RowViewState {
  cellViewStates: Array<CellViewState> = [];

  constructor(n: number, i: number) {
    makeObservable(this, {
      cellViewStates: observable,
    });
    this.cellViewStates = times(n).map((j) => new CellViewState(i, j));
  }
}
