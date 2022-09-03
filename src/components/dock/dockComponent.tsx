import React from "react";
import { Dock } from "primereact/dock";
import { observable } from "mobx";

import DockComponentModel from "./dockComponentModel";

interface Props {
  DockComponentModel: DockComponentModel;
}

const DockComponent = () => {
  return (
    <Dock
      position="bottom"
      model={[
        {
          label: "Finder",
          icon: () => (
            <img
              alt="Finder"
              src="https://raw.githubusercontent.com/primefaces/primereact/a3a319e1c517848931e07414b7bf4d8ce059554c/public/images/dock/finder.svg"
              width="100%"
            ></img>
          ),
          command: () => {
            console.log("Finder");
          }
        },
        {
          label: "Terminal",
          icon: () => (
            <img
              alt="Terminal"
              src="https://raw.githubusercontent.com/primefaces/primereact/a3a319e1c517848931e07414b7bf4d8ce059554c/public/images/dock/terminal.svg"
              width="100%"
            ></img>
          ),
        },
        {
          label: "App Store",
          icon: () => (
            <img
              alt="App Store"
              src="https://raw.githubusercontent.com/primefaces/primereact/a3a319e1c517848931e07414b7bf4d8ce059554c/public/images/dock/appstore.svg"
              width="100%"
            ></img>
          ),
        },
        {
          label: "Safari",
          icon: () => (
            <img
              alt="Safari"
              src="https://raw.githubusercontent.com/primefaces/primereact/a3a319e1c517848931e07414b7bf4d8ce059554c/public/images/dock/safari.svg"
              width="100%"
            ></img>
          ),
        },
        {
          label: "Photos",
          icon: () => (
            <img
              alt="Photos"
              src="https://raw.githubusercontent.com/primefaces/primereact/a3a319e1c517848931e07414b7bf4d8ce059554c/public/images/dock/photos.svg"
              width="100%"
            ></img>
          ),
        },
        {
          label: "Github",
          icon: () => (
            <img
              alt="Github"
              src="https://raw.githubusercontent.com/primefaces/primereact/a3a319e1c517848931e07414b7bf4d8ce059554c/public/images/dock/github.svg"
              width="100%"
            ></img>
          ),
        },
        {
          label: "Trash",
          icon: () => (
            <img
              alt="Trash"
              src="https://raw.githubusercontent.com/primefaces/primereact/a3a319e1c517848931e07414b7bf4d8ce059554c/public/images/dock/trash.png"
              width="100%"
            ></img>
          ),
        },
      ]}
    ></Dock>
  );
};

export default DockComponent;
