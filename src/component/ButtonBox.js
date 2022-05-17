import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ctaColor, GS, borderRadius} from '../const/GLOBALSTYLE';
const ButtonBox = ({name}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={[GS.H2, {color: '#ffffff'}]}>{name}</Text>
    </TouchableOpacity>
  );
};
export default ButtonBox;

const styles = StyleSheet.create({
  button: {
    // 'дата записи' (MyButton.js)
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ctaColor,
    borderRadius,
  },
});
