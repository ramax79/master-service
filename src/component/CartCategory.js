import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {observer} from 'mobx-react';

import {
  borderRadius,
  ctaColor,
  GS,
  unselectedNaviColor,
} from '../const/GLOBALSTYLE';

const CartCategory = observer(({navigation, name}) => {
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
        data={name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
});
export default CartCategory;

const styles = StyleSheet.create({
  box: {
    height: 40,
    width: '100%',
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
