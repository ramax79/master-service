import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {
  ctaColor,
  GS,
  borderRadius,
  unselectedNaviColor,
  marginBottom,
} from '../const/GLOBALSTYLE';
const ButtonBox = ({
  textButton,
  onPress,
  box,
  disabled,
  backgroundcolor,
  fontcolor,
}) => {
  let boxStyleText = [];
  let boxStyle = [];
  if (box) {
    if (disabled) {
      // стили для кнопки с рамками НЕ АКТИВНАЯ КНОПКА
      boxStyle = [
        styles.button,
        {backgroundColor: '#ffffff'}, // borderColor: unselectedColor
      ];
      boxStyleText = [GS.H2, {color: unselectedNaviColor}];
    } else {
      // стили для кнопки с рамками АКТИВНАЯ КНОПКА
      boxStyle = [
        styles.button,
        {
          backgroundColor: backgroundcolor,
          borderColor: ctaColor,
          borderWidth: 1,
        }, // ctaColor}, // borderColor: ctaColor
      ];
      boxStyleText = [GS.H2, {color: fontcolor}]; // '#ffffff'
    }
  } else {
    // стили для кнопки без рамок, просто текст
    boxStyleText = [GS.Subtitle2, {color: ctaColor, textAlign: 'center'}];
  }
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      android_ripple={{
        // color: ctaColor,
        foreground: false,
        borderless: false,
      }}
      style={({pressed}) => [
        boxStyle,
        // {
        //   backgroundColor: pressed ? ctaColor : unselectedColor,
        // },
        {opacity: pressed ? 0.1 : 1},
      ]}>
      <Text style={boxStyleText}>{textButton}</Text>
    </Pressable>
  );
};
export default ButtonBox;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius,
    marginBottom,
  },
});
