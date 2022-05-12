import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {observer} from 'mobx-react';

import {ctaColor, GS, textColor} from '../const/GLOBALSTYLE';

const CartDateSubscribe = observer(({navigation}) => {
  const dayWeek = 'Пятница';
  const date = '05.04.2022';
  const time = '| 09:00';

  return (
    <View style={styles.boxCartDateSubscribe}>
      <Icon name={'more-time'} size={30} color={textColor} />
      <Text style={[GS.Subtitle2, {color: textColor, paddingLeft: 5}]}>
        {dayWeek}, {date} {time}{' '}
      </Text>
    </View>
  );
});
export default CartDateSubscribe;

const styles = StyleSheet.create({
  boxCartDateSubscribe: {
    //CartMaster.js
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#ffffff',

    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
});
