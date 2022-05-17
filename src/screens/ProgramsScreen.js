import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import ButtonBox from '../component/ButtonBox';
import Search from '../component/Search';
import {GS, marginTop, marginBottom} from '../const/GLOBALSTYLE';
import {myState} from '../state/State';
import CartCategory from '../component/CartCategory';
import ListPrograms from '../component/ListPrograms';

const ProgramsScreen = ({navigation}) => {
  return (
    <View style={[GS.conteiner, {justifyContent: 'space-between'}]}>
      <Search name={'Поиск программы'} />
      <Text style={[GS.H2, {marginTop, marginBottom}]}>
        Категория программы
      </Text>
      <CartCategory name={myState.categoryPrograms} />
      <View style={{marginTop}}></View>
      <ListPrograms
        horizontal={false}
        width={'100%'}
        boxcartprograms={{marginBottom: 10}}
      />
      <View style={{marginBottom}}></View>
      <ButtonBox name={'Выбрать программу'} />
    </View>
  );
};
export default ProgramsScreen;
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   margin: 15,
  //   alignContent: 'space-around',
  //   // backgroundColor: 'red',
  // },
});
