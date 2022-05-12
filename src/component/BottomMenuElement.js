import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GS, ctaColor, backgroundColor} from '../const/GLOBALSTYLE';

const BottomMenuElement = ({focused, color, name}) => {
  console.log({color});
  return (
    <View>
      <Icon name={name} size={40} color={color} />
      <Text style={{color: focused ? ctaColor : unselectedNaviColor}}>
        Subscribe
      </Text>
    </View>
  );
};
export default BottomMenuElement;

// ({focused, color, size}) => (
//   <View>
//     <Icon name="event-note" size={40} color={color} />
//     <Text style={{color: {color}}}>Subscribe</Text>
//   </View>
// ),
