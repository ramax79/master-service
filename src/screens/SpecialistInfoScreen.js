import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {GS, marginTop, marginBottom, ctaColor} from '../const/GLOBALSTYLE';
import CartSpecialist from '../component/CartSpecialist';
import {myState} from '../state/State';
import {observer} from 'mobx-react';

const SpecialistInfoScreen = observer(({navigation, route}) => {
  const {id} = route.params;
  const item = myState.SPECIALIST.find(i => i.id === id);

  return (
    <View style={[GS.conteiner, {justifyContent: 'flex-start'}]}>
      <View style={{height: 80}}>
        <CartSpecialist id={id} infoEnable={false} />
      </View>
      <Text style={[GS.H2, styles.header]}>Специализация</Text>
      <Text style={[GS.SmallText]}>{item.specialization}</Text>
      <Text style={[GS.H2, styles.header]}>Образование</Text>
      <Text style={[GS.SmallText]}>{item.education}</Text>
      <Text style={[GS.H2, styles.header]}>Характеристика</Text>
      <Text style={[GS.SmallText]}>{item.info}</Text>
    </View>
  );
});
export default SpecialistInfoScreen;

const styles = StyleSheet.create({
  header: {
    marginBottom: 5,
    marginTop: 10,
  },
});
