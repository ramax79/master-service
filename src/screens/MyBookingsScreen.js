import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonText from '../component/ButtonText';
import {GS, marginBottom} from '../const/GLOBALSTYLE';
import ListMyBookings from '../component/ListMyBookings';
import {myState} from '../state/State';
import {observer} from 'mobx-react';

const MyBookingsScreen = observer(({navigation}) => {
  const onpress = () => {
    if (myState.activeMyBookings) {
      myState.setClearFilterMYBOOKINGS();
      myState.setAddFilterMYBOOKINGS(myState.MYBOOKINGS);
      // myState.filterMYBOOKINGS = [...myState.MYBOOKINGS];
    } else {
      myState.setClearFilterMYBOOKINGS();
      myState.setFilterMybookings();
      // myState.setActiveMyBookings(myState.activeMyBookings);
    }
    myState.setActiveMyBookings(myState.activeMyBookings);
  };
  return (
    <View style={[GS.conteiner, {justifyContent: 'space-between'}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={[GS.H2, {marginBottom}]}>Список моих записей</Text>
        {myState.activeMyBookings ? (
          <ButtonText name={'Показать все'} onPress={onpress} />
        ) : (
          <ButtonText name={'Убрать архивные'} onPress={onpress} />
        )}
      </View>
      <View style={{height: '100%', paddingBottom: 15}}>
        <ListMyBookings boxMargin={{marginBottom: 10}} />
      </View>
    </View>
  );
});
export default MyBookingsScreen;
