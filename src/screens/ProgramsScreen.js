import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ButtonBox from '../component/ButtonBox';
import Search from '../component/Search';
import {GS, marginTop, marginBottom, ctaColor} from '../const/GLOBALSTYLE';
import {myState} from '../state/State';
import CartCategory from '../component/CartCategory';
import ListPrograms from '../component/ListPrograms';

const ProgramsScreen = ({navigation}) => {
  const onPress = () => {};
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
        boxMargin={{marginBottom: 10}}
        navigation={navigation}
        
      />
      <View style={{marginBottom}}></View>
      <ButtonBox
        textButton={'Выбрать программу'}
        box={true}
        // onPress={onPress}
        onPress={() => navigation.navigate('Записаться')}
        disabled={false}
        backgroundcolor={ctaColor}
        fontcolor={'#ffffff'}
      />
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
