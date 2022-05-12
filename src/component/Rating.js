import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GS, unselectedColor} from '../const/GLOBALSTYLE';

const pressButton = () => {
  console.log('ok');
};

const Rating = ({name, color, size, rating, width, height}) => {
  const styles = StyleSheet.create({
    container: {
      width,
      height,
      padding: 5,
      flexDirection: 'row',
      // flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: unselectedColor,
      borderRadius: 5,
      paddingRight: 8,
    },
  });
  return (
    <TouchableOpacity onPress={pressButton}>
      <View style={styles.container}>
        {name != '' ? <Icon name={name} size={size} color={color} /> : null}
        <Text style={[GS.Subtitle2, {color: {color}}]}>{rating}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Rating;
