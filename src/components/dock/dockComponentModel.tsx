import { makeAutoObservable } from "mobx";

class DockComponentModel {
  constructor() {
    makeAutoObservable(this);
  }

  dockItems = [
    {
      label: "Finder",
      image: "https://raw.githubusercontent.com/primefaces/primereact/a3a319e1c517848931e07414b7bf4d8ce059554c/public/images/dock/finder.svg"
    }
  ]
}

export default DockComponentModel;
