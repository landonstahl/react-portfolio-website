import React from "react";
import { observer } from "mobx-react";

import HomeViewModel from "./homeViewModel";
import "./homeStyles.css";
import DockComponent from "../../components/dock/dockComponent";

interface Props {
  homeViewModel: HomeViewModel;
}

const HomeView = ({ homeViewModel }: Props) => {
  return (
    <div className="desktop">
      <DockComponent
        dockItemClicked={(passedIcon) => homeViewModel.dockIconEvent(passedIcon)}
      ></DockComponent>
    </div>
  );
};

export default observer(HomeView);
