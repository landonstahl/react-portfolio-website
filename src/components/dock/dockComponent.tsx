import React from "react";
import { Dock } from "primereact/dock";
import { Tooltip } from "primereact/tooltip";
import { observable } from "mobx";

import DockComponentModel from "./dockComponentModel";

interface Props {
  DockComponentModel: DockComponentModel;
}

const DockComponent = () => {
  return (
    <div>
      {/* 
      This is actually really bad. I don't understand how the my parameter works, 
      but tweaking the center+ value will move the tooltip left and right over the icon. 
      It has to be tweaked for each new dock item added to be centered 
      */}
      <Tooltip
        target={".p-dock-action"}
        my="center+28 bottom-15"
        at="center top"
        showDelay={150}
      ></Tooltip>
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
            },
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
    </div>
  );
};

export default DockComponent;
