import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ctaColor, GS} from '../const/GLOBALSTYLE';
const MyButton = ({name}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={[GS.H2, {color: '#ffffff'}]}>{name}</Text>
    </TouchableOpacity>
  );
};
export default MyButton;

const styles = StyleSheet.create({
  button: {
    // 'дата записи' (MyButton.js)
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ctaColor,
    borderRadius: 7,
  },
});
