import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ListSpecialist from '../component/ListSpecialist';
import ButtonBox from '../component/ButtonBox';
import Search from '../component/Search';
import {GS, marginTop, marginBottom} from '../const/GLOBALSTYLE';
import CartCategory from '../component/CartCategory';
import {myState} from '../state/State';

const SpecialistScreen = ({navigation}) => {
  // const cartspecialist = {
  //   horizontal: 'false',
  //   box: {flex: 1, marginTop: 15},
  // };
  return (
    <View style={[GS.conteiner, {justifyContent: 'space-between'}]}>
      <Search name={'Поиск специалиста'} />
      <Text style={[GS.H2, {marginTop, marginBottom}]}>Специализация</Text>
      <CartCategory name={myState.categorySpecialization} />

      <View style={{marginTop}}></View>
      <ListSpecialist
        horizontal={false}
        width={'100%'}
        boxMargin={{marginBottom: 10}}
      />
      <View style={{marginBottom}}></View>

      <ButtonBox name={'Выбрать специалиста'} />
    </View>
  );
};
export default SpecialistScreen;
