import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  borderRadius,
  ctaColor,
  GS,
  unselectedColor,
} from '../const/GLOBALSTYLE';

const pressButton = () => {
  console.log('ok');
};

const Rating = ({
  name,
  color,
  size,
  text,
  width,
  height,
  disabled,
  textMargin,
  aligncenter,
}) => {
  const styles = StyleSheet.create({
    container: {
      // padding: 5,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 5,

      // backgroundColor: '#ffffff',
    },
  });
  const boxStyle = [styles.container];
  const textStyle = [{color: {color}}];
  // console.log(aligncenter);
  if (aligncenter) {
    boxStyle.push({
      justifyContent: 'space-around',
      padding: 5,
      width,
      height,
      backgroundColor: unselectedColor,
    });
    textStyle.push(textMargin);
  } else {
    boxStyle.push({
      justifyContent: 'flex-start',
      paddingTop: 2,
      paddingLeft: 0,
      backgroundColor: '#ffffff',
    });
    textStyle.push(textMargin);
  }

  return (
    <Pressable
      onPress={pressButton}
      disabled={disabled}
      android_ripple={{
        // color: ctaColor,
        foreground: false,
        borderless: false,
      }}
      style={({pressed}) => [
        boxStyle,
        {
          // backgroundColor: pressed ? ctaColor : unselectedColor,
          opacity: pressed ? 0.1 : 1,
        },
      ]}>
      {name != '' ? <Icon name={name} size={size} color={color} /> : null}
      <Text style={[GS.Subtitle2, textStyle]}>{text}</Text>
    </Pressable>
  );
};
export default Rating;
