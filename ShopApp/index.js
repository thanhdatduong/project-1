/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import {
//   Welcome,
//   Login,
//   Register,
//   ClothesList,
//   ProductGridView,
//   Settings,
// } from './screens';
// import UITab from './navigation/UITab';
import App from './navigation/App';
AppRegistry.registerComponent(appName, () => App);
