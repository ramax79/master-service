import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ButtonBox from '../component/ButtonBox';
import Search from '../component/Search';
import {GS, marginTop, marginBottom, ctaColor} from '../const/GLOBALSTYLE';
import {myState} from '../state/State';
import {observer} from 'mobx-react';

import CartPrograms from '../component/CartPrograms';

const ProgramsInfoScreen = observer(({navigation, route}) => {
  const {id} = route.params;
  const item = myState.PROGRAMS.find(i => i.id === id);

  return (
    <View style={[GS.conteiner]}>
      <View style={{height: 155}}>
        <CartPrograms id={id} infoEnable={false} 
           
          // onPress={() => activeItems(item, index)}
          navigation={navigation}
          // activeIndex={activeIndex}
          // index={index}
          disabled={false}
        />
      </View>
      <Text style={[GS.H2, styles.header]}>Описание</Text>
      <Text style={[GS.SmallText]}>{item.info}</Text>
    </View>
  );
});
export default ProgramsInfoScreen;
const styles = StyleSheet.create({
  header: {
    marginBottom: 5,
    marginTop: 10,
  },
});
