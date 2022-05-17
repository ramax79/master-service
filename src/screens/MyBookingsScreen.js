import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonText from '../component/ButtonText';
import {GS, marginBottom} from '../const/GLOBALSTYLE';
const MyBookingsScreen = ({navigation}) => {
  return (
    <View style={[GS.conteiner, {justifyContent: 'space-between'}]}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={[GS.H2, {marginBottom}]}>Список моих записей</Text>
          <ButtonText name={'Показать все'} />
        </View>
        <View style={{height: 80}}>
          {/* <ListSpecialist
            horizontal={true}
            width={230}
            // imageCartSpecialistHeight={'100%'}
            boxcartspecialist={{marginRight: 10}}
          /> */}
        </View>
      </View>
    </View>
  );
};
export default MyBookingsScreen;
