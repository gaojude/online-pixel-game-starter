import { RowViewState } from "./RowViewState";
import { makeObservable, observable } from "mobx";
import { times } from "lodash";

export class GridViewState {
  rowViewStates: Array<RowViewState> = [];

  constructor(private m: number, private n: number) {
    makeObservable(this, {
      rowViewStates: observable,
    });
    this.rowViewStates = times(m).map((i) => new RowViewState(n, i));
  }

  update = (data: number[][]) => {
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; ++i) {
        for (let j = 0; j < data[0].length; ++j) {
          this.rowViewStates[i].cellViewStates[j].setValue(data[i][j]);
        }
      }
    }
  };
}
