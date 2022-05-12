import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {backgroundColor, ctaColor, GS} from '../const/GLOBALSTYLE';
import CartMaster from '../component/CartMaster';
import CartPrograms from '../component/CartPrograms';
import CartDateSubscribe from '../component/CartDateSubscribe';
import MyButton from '../component/MyButton';

const marginBottom = 5;
const marginTop = 15;
const SubscribeScreen = ({naviagation}) => {
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
          <Text style={[GS.Subtitle2, {color: ctaColor, textAlign: 'center'}]}>
            Показать все
          </Text>
        </View>
        <CartMaster />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop,
          }}>
          <Text style={[GS.H2, {marginBottom}]}>Программа</Text>
          <Text style={[GS.Subtitle2, {color: ctaColor, textAlign: 'center'}]}>
            Показать все
          </Text>
        </View>
        <CartPrograms />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop,
          }}>
          <Text style={[GS.H2, {marginBottom}]}>Дата записи</Text>
          <TouchableOpacity>
            <Text
              style={[GS.Subtitle2, {color: ctaColor, textAlign: 'center'}]}>
              Изменить
            </Text>
          </TouchableOpacity>
        </View>
        <CartDateSubscribe />
      </View>
      <MyButton name={'Записаться'} />
    </View>
  );
};
export default SubscribeScreen;

// const styles = StyleSheet.create({
//   conteiner: {
//     flex: 1,
//     margin: 15,
//     backgroundColor,
//     justifyContent: 'space-between',
//   },
// });
