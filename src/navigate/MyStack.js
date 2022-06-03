import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DateSubscribe from '../screens/DateSubscribe';
import TabNavigator from '../navigate/TabNavigator';
import AlertBox from '../component/AlertBox';
import SpecialistInfoScreen from '../screens/SpecialistInfoScreen';
import ProgramsInfoScreen from '../screens/ProgramsInfoScreen';
import CommentScreen from '../screens/CommentScreen';

import {GS, backgroundColor} from '../const/GLOBALSTYLE';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {backgroundColor},
  // headerTintColor: '#000',
  headerTitleStyle: {
    fontFamily: GS.H1.fontFamily,
    color: GS.H1.color,
    fontSize: GS.H1.fontSize,
  },
  cardStyle: {
    backgroundColor,
    flex: 1,
  },
  // transitionSpec https://reactnavigation.org/docs/stack-navigator/#animations
};
// const header = GS.H1;
// console.log(header);

export default function MyStack() {
  return (
    <Stack.Navigator
      // initialRouteName="DateSubscribe"
      screenOptions={screenOptions}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Дата записи"
        component={DateSubscribe}
        // initialRouteName
        options={{
          title: 'Дата записи',
          // style: {backgroundColor},
          // headerShown: true, // прятает заголовок окна
          //   headerTintColor: 'white',
          //   headerStyle: {backgroundColor: 'tomato'},
          // headerTitleStyle: {

          //   fontFamily: GS.H1.fontFamily,
          // },
        }}
      />
      <Stack.Screen
        name="AlertBox"
        component={AlertBox}
        options={{presentation: 'modal', headerShown: false}}
      />
      <Stack.Screen
        name="SpecialistInfoScreen"
        component={SpecialistInfoScreen}
        options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen
        name="ProgramsInfoScreen"
        component={ProgramsInfoScreen}
        options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen
        name="Добавить отзыв"
        component={CommentScreen}
        // options={({route}) => ({title: route.params.title})}
      />

      {/* <Stack.Screen name="MyModal" component={ModalScreen} /> */}
    </Stack.Navigator>
  );
}
