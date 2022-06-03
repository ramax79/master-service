import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {observer} from 'mobx-react';
import {myState} from '../state/State';
import {
  GS,
  marginBottom,
  padding,
  successColor,
  ctaColor,
  textColor,
  borderRadius,
} from '../const/GLOBALSTYLE';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonBox from './ButtonBox';

const TextElement = ({text1, text2}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={[GS.Subtitle2]}>{text1}</Text>
      <Text style={[GS.Subtitle1, {color: ctaColor}]}>{text2}</Text>
    </View>
  );
};

const AlertBox = observer(({navigation}) => {
  const onPress = () => {
    console.log('Записан');
  };

  // {backgroundColor: 'red'}
  return (
    <View style={[GS.conteiner, {justifyContent: 'center'}]}>
      <View style={styles.box}>
        <View style={[styles.icon, marginBottom]}>
          <Icon name={'check-circle'} size={70} color={successColor} />
        </View>
        <Text style={[GS.H2, {textAlign: 'center'}]}>
          Подтвердите свою запись:
        </Text>
        <TextElement
          text1="Ваша запись к специалисту:"
          text2={myState.specialistBookingFormated}
        />
        <TextElement
          text1="Программа:"
          text2={myState.programBookingFormated}
        />
        <TextElement
          text1="Цена:"
          text2={`${myState.priceBookingFormated} руб`}
        />
        <TextElement text1="Дата:" text2={myState.dataBookingFormated} />
        <View style={{marginBottom: 15}}></View>
        <ButtonBox
          textButton={'Записаться'}
          onPress={onPress}
          box={true}
          // disabled={true}
          disabled={false}
          backgroundcolor={ctaColor}
          fontcolor={'#ffffff'}
        />
        <ButtonBox
          textButton={'Отмена'}
          onPress={() => navigation.goBack()}
          box={true}
          // disabled={true}
          disabled={false}
          backgroundcolor={'#ffffff'}
          fontcolor={textColor}
        />
      </View>
    </View>
  );
});
export default AlertBox;
const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  box: {
    backgroundColor: '#ffffff',
    borderRadius,
    padding,
  },
});
