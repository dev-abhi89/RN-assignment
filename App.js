import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/screens/home/home';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Navigation from './src/navigation/mainContainer';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/mainStorage';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
