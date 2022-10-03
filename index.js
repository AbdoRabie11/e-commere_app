import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {configuraApiRequest} from './src/utls/helpersFunctions'
import {name as appName} from './app.json';
import {configureAxios} from './src/utls/helpersFunctions'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const connectedApp = () => <Provider store={store} >
    <App />
  </Provider>

// configureAxios()
configuraApiRequest()

AppRegistry.registerComponent(appName, () => connectedApp);
