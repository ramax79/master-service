import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {itemMarginBottom} from '../const/GLOBALSTYLE';
import {observer} from 'mobx-react';
import {myState} from '../state/State';

import CartSpecialist from './CartSpecialist';

const ListSpecialist = observer(({navigation, }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItems = (item, index) => {
    setActiveIndex(index + 1);
    myState.setActiveSpecialist(index + 1);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{marginBottom: itemMarginBottom}}>
        <CartSpecialist
          id={item.id}
          onPress={() => activeItems(item, index)}
          navigation={navigation}
          activeIndex={activeIndex}
          index={index}
          disabled={false}
          buttonCartInfoOnPress={() =>
          navigation.navigate('SpecialistInfoScreen', {
            id: item.id,
            title: item.fio,
          })}
        />
      </View>
    );
  };

  return (
    <View style={styles.box}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={myState.SPECIALIST}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
});

export default ListSpecialist;

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
});
