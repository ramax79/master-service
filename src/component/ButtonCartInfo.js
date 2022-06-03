import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {ctaColor, GS, unselectedColor} from '../const/GLOBALSTYLE';

const pressButton = () => {
  console.log('ok');
};
const ButtonCartInfo = ({
  navigation,
  name,
  size = 20,
  color,
  onPress,
  backgroundColor = unselectedColor,
}) => {
  const styles = StyleSheet.create({
    container: {
      width: size + 10,
      height: size + 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
  });
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{
        // color: ctaColor,
        foreground: false,
        borderless: false,
      }}
      style={({pressed}) => [
        styles.container,
        {
          backgroundColor: pressed ? ctaColor : backgroundColor,
        },
        {opacity: pressed ? 0.1 : 1},
      ]}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
};
export default ButtonCartInfo;
