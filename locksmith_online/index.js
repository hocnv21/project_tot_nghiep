/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import MapView, {
//   PROVIDER_GOOGLE,
//   Marker,
//   enableLatestRenderer,
// } from 'react-native-maps';

// enableLatestRenderer();

AppRegistry.registerComponent(appName, () => App);
