import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {GS, marginTop, marginBottom} from '../const/GLOBALSTYLE';
import CartDateSubscribe from '../component/CartDateSubscribe';
import ButtonBox from '../component/ButtonBox';
import ButtonText from '../component/ButtonText';
import ListSpecialist from '../component/ListSpecialist';
import ListPrograms from '../component/ListPrograms';

const BookingsScreen = ({naviagation}) => {

  return (
    <View style={[GS.conteiner, {justifyContent: 'space-between'}]}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={[GS.H2, {marginBottom}]}>Специалист</Text>
          <ButtonText name={'Показать все'} />
        </View>
        <View style={{height: 80}}>
          <ListSpecialist
            horizontal={true}
            width={230}
            // imageCartSpecialistHeight={'100%'}
            boxcartspecialist={{marginRight: 10}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop,
          }}>
          <Text style={[GS.H2, {marginBottom}]}>Программа</Text>
          <ButtonText name={'Показать все'} />
        </View>
        <View style={{height: 155}}>
          <ListPrograms
            horizontal={true}
            width={300}
            // imageCartSpecialistHeight={'100%'}
            boxcartprograms={{marginRight: 10}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop,
          }}>
          <Text style={[GS.H2, {marginBottom}]}>Дата записи</Text>
          <ButtonText name={'Изменить'} />
        </View>
        <CartDateSubscribe />
      </View>
      <ButtonBox name={'Записаться'} />
    </View>
  );
};
export default BookingsScreen;

 
