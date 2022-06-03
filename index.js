import 'react-native-gesture-handler';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Route from './src/routes/route';

AppRegistry.registerComponent(appName, () => Route);
