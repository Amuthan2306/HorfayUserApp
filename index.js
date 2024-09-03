/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App.tsx';
import {name as appName} from './app.json';
import Functions from './src/utils/global/functions';
import * as Configuration from './src/utils/global/constants';
import * as Events from './src/utils/global/events';
import * as userActions from './src/redux/Action';
if (global.functions == null) global.functions = Functions.getInstance();
if (global.const == null) global.const = Configuration;
if (global.event == null) global.event = Events;
if (global.actions == null) global.actions = userActions;
AppRegistry.registerComponent(appName, () => App);
