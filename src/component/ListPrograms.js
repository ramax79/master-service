import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {observer} from 'mobx-react';
import * as mobx from 'mobx';
import {myState} from '../state/State';

import {
  borderRadius,
  ctaColor,
  padding,
  itemMarginBottom,
} from '../const/GLOBALSTYLE';

import CartPrograms from './CartPrograms';

const ListPrograms = observer(({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItems = (item, index) => {
    setActiveIndex(index + 1);
    myState.setActiveProgram(index + 1);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{marginBottom: itemMarginBottom}}>
        <CartPrograms
          id={item.id}
          onPress={() => activeItems(item, index)}
          navigation={navigation}
          activeIndex={activeIndex}
          index={index}
          disabled={false}
          buttonCartInfoOnPress={() =>
            navigation.navigate('ProgramsInfoScreen', {
              id: item.id,
              title: item.nameProgram,
            })
          }
        />
      </View>
    );
  };

  return (
    <View style={styles.box}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={myState.PROGRAMS}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
});
export default ListPrograms;
const styles = StyleSheet.create({
  box: {flex: 1},
});
