import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import {
  GS,
  marginTop,
  marginBottom,
  errorColor,
  ctaColor,
} from '../const/GLOBALSTYLE';
import CartDateSubscribe from '../component/CartDateSubscribe';
import ButtonBox from '../component/ButtonBox';

import {observer} from 'mobx-react';
import {myState} from '../state/State';

import CurrentGetDate from '../const/CurrentGetDate';
import Config from 'react-native-config';

import moment from 'moment';
import CartSpecialist from '../component/CartSpecialist';
import CartPrograms from '../component/CartPrograms';

const BookingsScreen = observer(({navigation}) => {
  console.log('process.env.DATABASE = ', Config.DATABASE);
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
          <ButtonBox
            textButton={'Показать все'}
            onPress={() => navigation.navigate('Специалисты')}
            box={false}
            disabled={false}
          />
        </View>
        <View style={{height: 80}}>
          <CartSpecialist
            id={myState.activeSpecialist}
            onPress={() => navigation.navigate('Специалисты')}
            navigation={navigation}
            activeIndex={0}
            index={0}
            disabled={false}
            buttonCartInfoOnPress={
              // console.log(myState.activeSpecialist)
              () => {
                const user = myState.SPECIALIST.find(
                  item => item.id === myState.activeSpecialist,
                );
                navigation.navigate('SpecialistInfoScreen', {
                  id: myState.activeSpecialist,
                  title: user.fio,
                });
              }
            }
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
          <ButtonBox
            textButton={'Показать все'}
            box={false}
            onPress={() => navigation.navigate('Программы')}
            disabled={false}
          />
        </View>
        <View style={{height: 155}}>
          <CartPrograms
            id={myState.activeProgram}
            onPress={() => navigation.navigate('Программы')}
            navigation={navigation}
            activeIndex={0}
            index={0}
            disabled={false}
            buttonCartInfoOnPress={() => {
              const program = myState.PROGRAMS.find(
                item => item.id === myState.activeProgram,
              );
              navigation.navigate('ProgramsInfoScreen', {
                id: myState.activeProgram,
                title: program.nameProgram,
              });
            }}
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
          <ButtonBox
            textButton={'Изменить'}
            box={false}
            onPress={() => navigation.navigate('Дата записи')}
            disabled={false}
          />
        </View>
        <CartDateSubscribe />
      </View>
      {myState.timeBooking === null ||
      myState.activeSpecialist === null ||
      myState.activeProgram === null ? (
        <Text style={(GS.SmallText, {color: errorColor})}>
          Данные не выбраны!
        </Text>
      ) : null}
      {myState.timeBooking === null ||
      myState.activeSpecialist === null ||
      myState.activeProgram === null ? (
        <ButtonBox
          textButton={'Записаться'}
          // onPress={() => navigation.navigate('AlertBox')}
          onPress={() => {
            const currentDate = new CurrentGetDate(new Date());
            console.log(currentDate.WeekDay);
          }}
          box={true}
          // disabled={true}
          disabled={false}
          backgroundcolor={ctaColor}
          fontcolor={'#ffffff'}
        />
      ) : (
        <ButtonBox
          textButton={'Записаться'}
          box={true}
          onPress={() => navigation.navigate('AlertBox')}
          disabled={false}
          backgroundcolor={ctaColor}
          fontcolor={'#ffffff'}
        />
      )}
    </View>
  );
});
export default BookingsScreen;
