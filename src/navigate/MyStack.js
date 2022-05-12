import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {backgroundColor, GS} from '../const/GLOBALSTYLE';

import DateSubscribe from '../screens/DateSubscribe';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {backgroundColor},
  // headerTintColor: '#000',
  headerTitleStyle: {
    fontFamily: GS.H1.fontFamily,
    color: GS.H1.color,
    fontSize: GS.H1.fontSize,
  },
  cardStyle: {backgroundColor, flex: 1},
  // transitionSpec https://reactnavigation.org/docs/stack-navigator/#animations
};
// const header = GS.H1;
// console.log(header);

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="DateSubscribe"
      screenOptions={screenOptions}>
      <Stack.Screen
        name="DateSubscribe"
        component={DateSubscribe}
        // initialRouteName
        options={{
          title: 'Дата записи',
          style: {backgroundColor},
          // headerShown: true, // прятает заголовок окна
          //   headerTintColor: 'white',
          //   headerStyle: {backgroundColor: 'tomato'},
          // headerTitleStyle: {

          //   fontFamily: GS.H1.fontFamily,
          // },
        }}
      />
      {/* <Stack.Screen
        name="App_20"
        component={App_20}
        options={{
          title: 'Урок 20', // Заголовок окна
        }}
      /> */}
    </Stack.Navigator>
  );
}
