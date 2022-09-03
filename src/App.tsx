import React from 'react';
import { observer } from 'mobx-react';
import { Routes, Route } from 'react-router-dom';
import HomeView from './views/homeView/homeView';


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import HomeViewModel from './views/homeView/homeViewModel';
 

const Home = () => {

  const homeViewModel = new HomeViewModel();

  return (
      <Routes>
        <Route path="" element={<HomeView homeViewModel={homeViewModel} />}>
        </Route>
        <Route path="landon" element={<div>Landon!</div>}>
        </Route>
      </Routes>
  );
};

export default observer(Home);
