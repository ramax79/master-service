import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ButtonBox from '../component/ButtonBox';
import Search from '../component/Search';
import {GS, marginTop, marginBottom, ctaColor} from '../const/GLOBALSTYLE';
import {myState} from '../state/State';
import {Observer} from 'mobx-react';
import CartCategory from '../component/CartCategory';
import ListPrograms from '../component/ListPrograms';

const ProgramsScreen = ({navigation}) => {
  // let disabledButton = true;
  // myState.activeProgram === null
  //   ? (disabledButton = true)
  //   : (disabledButton = false);
  return (
    <View style={[GS.conteiner, {justifyContent: 'space-between'}]}>
      <Search name={'Поиск программы'} />
      <Text style={[GS.H2, {marginTop, marginBottom}]}>
        Категория программы
      </Text>
      <CartCategory name={myState.categoryPrograms} />
      <View style={{marginTop}}></View>
      <ListPrograms               
        navigation={navigation}
      />
      
      <Observer>
        {() => {
          let disabledButton = true;
          myState.activeProgram === null
            ? (disabledButton = true)
            : (disabledButton = false);
          return (
            <ButtonBox
              textButton={'Выбрать программу'}
              box={true}
              // onPress={onPress}
              onPress={() => navigation.navigate('Записаться')}
              disabled={disabledButton}
              backgroundcolor={ctaColor}
              fontcolor={'#ffffff'}
            />
          );
        }}
      </Observer>
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
