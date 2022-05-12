import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import CartSpecialization from '../component/CartSpecialization';
import ListMaster from '../component/ListMaster';
import MyButton from '../component/MyButton';
import MySearch from '../component/MySearch';
import {GS} from '../const/GLOBALSTYLE';

const MasterScreen = ({navigation}) => {
  const marginBottom = 5;
  const marginTop = 15;

  return (
    <View style={GS.conteiner}>
      <MySearch name={'Поиск специалиста'} />
      <Text style={[GS.H2, {marginTop, marginBottom}]}>Специализация</Text>
      <CartSpecialization />
      <ListMaster />
      <MyButton name={'Записаться'} />
    </View>
  );
};
export default MasterScreen;
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   margin: 15,
  //   alignContent: 'space-around',
  //   // backgroundColor: 'red',
  // },
});
