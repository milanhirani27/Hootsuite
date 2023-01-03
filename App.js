import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/appNavigation';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/Reducer/index';
import storage from '@react-native-community/async-storage';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['tabIndex'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
