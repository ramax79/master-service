import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {observer} from 'mobx-react';
import * as mobx from 'mobx';
import {myState} from '../state/State';

import {
  borderRadius,
  ctaColor,
  GS,
  textColor,
  unselectedNaviColor,
} from '../const/GLOBALSTYLE';

const CartSpecialization = observer(({navigation}) => {
  const activeItems = (item, index) => {
    setActiveIndex(index + 1);
  };

  const renderItem = ({item, index}) => {
    const boxCart = [styles.boxCartSpecialization];
    const colorNameSpecialization = [{color: unselectedNaviColor}];
    if (activeIndex === index + 1) {
      boxCart.push(styles.activeBoxCartSpecialization);
      colorNameSpecialization.push({color: '#ffffff'});
    }

    return (
      <TouchableOpacity
        onPress={() => activeItems(item, index)}
        style={boxCart}>
        <Text style={[GS.Subtitle2, colorNameSpecialization]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <View style={styles.box}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={myState.specialization}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
});
export default CartSpecialization;

const styles = StyleSheet.create({
  box: {
    height: 40,
    width: '100%',
    // backgroundColor: 'red',
    // borderRadius: 7,
    // borderWidth: 1,
    // backgroundColor
  },
  boxCartSpecialization: {
    //CartMaster.js
    height: 40,
    width: 130,
    borderRadius,
    borderWidth: 1,
    borderColor: unselectedNaviColor,
    backgroundColor: '#ffffff',
    marginRight: 10,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  activeBoxCartSpecialization: {
    //CartMaster.js
    height: 40,
    width: 130,
    borderRadius: 7,
    borderWidth: 1,
    backgroundColor: ctaColor,
    marginRight: 10,
    flexDirection: 'column',
    padding: 5,
  },
});
