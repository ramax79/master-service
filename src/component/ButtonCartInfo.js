import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {GS, unselectedColor} from '../const/GLOBALSTYLE';

const pressButton = () => {
  console.log('ok');
};
const ButtonCartInfo = ({name, color}) => {
  return (
    <TouchableOpacity onPress={pressButton}>
      <View style={styles.container}>
        <Icon name={name} size={20} color={color} />
      </View>
    </TouchableOpacity>
  );
};
export default ButtonCartInfo;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    // padding: 5,
    // flexDirection: 'row',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
    backgroundColor: unselectedColor,
    borderRadius: 5,
  },
});
