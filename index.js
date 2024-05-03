/**
 * @format
 */
/*if (__DEV__) {
  require('./ReactotronConfig');
}*/
//import zustymiddleware from 'zustymiddleware';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);
