import { makeAutoObservable } from "mobx";

class DockComponentModel {
  constructor() {
    makeAutoObservable(this);
  }
}

export default DockComponentModel;
