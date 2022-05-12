import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';

import MyStack from './src/navigate/MyStack';
import TabNavigator from './src/navigate/TabNavigator';

import {backgroundColor, GS} from './src/const/GLOBALSTYLE';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        // hidden={true}
        barStyle="dark-content"
        backgroundColor={backgroundColor}
      />
      {/* <MyStack /> */}
      <TabNavigator />
    </NavigationContainer>
  );
};
export default App;
