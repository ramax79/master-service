import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {ctaColor, GS, unselectedColor} from '../const/GLOBALSTYLE';

const pressButton = () => {
  console.log('ok');
};
const ButtonCartInfo = ({name, color}) => {
  return (
    <Pressable
      onPress={pressButton}
      android_ripple={{
        // color: ctaColor,
        foreground: false,
        borderless: false,
      }}
      style={({pressed}) => [
        styles.container,
        {
          backgroundColor: pressed ? ctaColor : unselectedColor,
        },
        {opacity: pressed ? 0.1 : 1},
      ]}>
      <Icon name={name} size={20} color={color} />
    </Pressable>
  );
};
export default ButtonCartInfo;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,   
    justifyContent: 'center',
    alignItems: 'center',    
    borderRadius: 5,
  },
});
