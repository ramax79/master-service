import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ListSpecialist from '../component/ListSpecialist';
import ButtonBox from '../component/ButtonBox';
import Search from '../component/Search';
import {GS, marginTop, marginBottom, ctaColor} from '../const/GLOBALSTYLE';
import CartCategory from '../component/CartCategory';
import {myState} from '../state/State';

const SpecialistScreen = ({navigation}) => {
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
        navigation={navigation}
      />
      <View style={{marginBottom}}></View>

      <ButtonBox
        textButton={'Выбрать специалиста'}
        box={true}
        onPress={() => navigation.navigate('Записаться')}
        disabled={false}
        backgroundcolor={ctaColor}
        fontcolor={'#ffffff'}
      />
    </View>
  );
};
export default SpecialistScreen;
