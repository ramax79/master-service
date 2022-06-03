import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BookingsScreen from '../screens/BookingsScreen';
import SpecialistScreen from '../screens/SpecialistScreen';
import ProgramsScreen from '../screens/ProgramsScreen';
import MyBookingsScreen from '../screens/MyBookingsScreen';

import {
  GS,
  ctaColor,
  backgroundColor,
  unselectedNaviColor,
  height,
} from '../const/GLOBALSTYLE';
import BottomMenuElement from '../component/BottomMenuElement';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={ProgramsScreen}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: ctaColor, //'#ffffff',
        abBarInactiveTintColor: unselectedNaviColor,
        // tabBarActiveBackgroundColor: ctaColor,
        // tabBarInactiveBackgroundColor: backgroundColor,
        tabBarStyle: {
          height: 80,
          // borderWidth:1,
          paddingHorizontal: 30,
          backgroundColor,
        },
        tabBarItemStyle: {
          height: 70,
          width: 70,
          // borderRadius: 15,
        },
        headerStyle: {
          backgroundColor,
        },
        headerTitleStyle: GS.H1,
        headerTitleAlign: 'center',
      }}
      sceneContainerStyle={{
        // цвет контейнера окна
        backgroundColor,
      }}>
      {/* записаться Subscribe.js*/}
      <Tab.Screen
        name="Записаться"
        component={BookingsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="event-note" size={40} color={color} />
              <Text
                style={[
                  GS.extraSmallText,
                  {color: focused ? ctaColor : unselectedNaviColor},
                ]}>
                Записаться
              </Text>
            </View>
          ),
          // ({color}) => {
          //   <BottomMenuElement focused={focused} name="event-note" color={color} />;
          // },
        }}
      />
      {/* специалисты Specialist.js */}
      <Tab.Screen
        name="Специалисты"
        component={SpecialistScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="person-search" size={40} color={color} />
              <Text
                style={[
                  GS.extraSmallText,
                  {color: focused ? ctaColor : unselectedNaviColor},
                ]}>
                Специалисты
              </Text>
            </View>
          ),
        }}
      />
      {/* программы Programs.js */}
      <Tab.Screen
        name="Программы"
        component={ProgramsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="medical-services" size={40} color={color} />
              <Text
                style={[
                  GS.extraSmallText,
                  {color: focused ? ctaColor : unselectedNaviColor},
                ]}>
                Программы
              </Text>
            </View>
          ),
        }}
      />
      {/* мои записи MySubscribe.js*/}
      <Tab.Screen
        name="Мои записи"
        component={MyBookingsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="event-available" size={40} color={color} />
              <Text
                style={[
                  GS.extraSmallText,
                  {color: focused ? ctaColor : unselectedNaviColor},
                ]}>
                Мои записи
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
