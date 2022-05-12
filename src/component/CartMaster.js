import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  borderRadius,
  ctaColor,
  errorColor,
  GS,
  textColor,
  unselectedNaviColor,
} from '../const/GLOBALSTYLE';
import {observer} from 'mobx-react';
import * as mobx from 'mobx';
import {myState} from '../state/State';

import ButtonCartInfo from './ButtonCartInfo';
import Rating from './Rating';

const CartMaster = observer(({navigation}) => {
  const activeItems = (item, index) => {
    setActiveIndex(index + 1);
  };

  const renderItem = ({item, index}) => {
    const favorite = false;
    let nameFavorite = '';
    let colorFavorite = '';
    if (favorite) {
      nameFavorite = 'turned-in';
      colorFavorite = errorColor;
    } else {
      nameFavorite = 'turned-in-not';
      colorFavorite = ctaColor;
    }
    const boxCartMaster = [styles.boxCartMaster];
    const colorFioCartMaster = [{color: textColor}];
    const colorSpecCartMaster = [{color: unselectedNaviColor}];

    if (activeIndex === index + 1) {
      boxCartMaster.push(styles.activeBoxCartMaster);
      colorFioCartMaster.push({color: '#ffffff'});
      colorSpecCartMaster.push({color: '#ffffff'});
    }
    // console.log(item.foto);
    return (
      // <View style={boxCartMaster}>
      <TouchableOpacity
        // style={boxCartMaster}
        onPress={() => activeItems(item, index)}>
        <View style={boxCartMaster}>
          <Image source={{uri: item.foto}} style={styles.imageCartMaster} />
          {/* box описания */}
          <View style={styles.boxTextCartMaster}>
            {/* группа текстовое описание */}
            <View style={{justifyContent: 'space-between'}}>
              <View style={styles.textCartMaster}>
                <Text style={[GS.Subtitle2, colorFioCartMaster]}>
                  {item.fio}
                </Text>
                <Text style={[GS.extraSmallText, colorSpecCartMaster]}>
                  {item.specialization}
                </Text>
              </View>
              <Rating
                name={'star-rate'}
                size={15}
                color={ctaColor}
                rating={item.rating}
                width={55}
                height={30}
              />
            </View>
            {/* группа избранное и описание */}
            <View style={styles.infoCartMaster}>
              <ButtonCartInfo name={nameFavorite} color={colorFavorite} />

              {/* <ButtonCartInfo name={'turned-in'} color={errorColor} /> */}
              <ButtonCartInfo name={'info'} color={ctaColor} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <View style={{flexDirection: 'row'}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={myState.MASTER}
        horizontal={true}
        // initialScrollIndex={activeDayIndex - 1}
        // getItemLayout={(data, index) => ({
        //   length: width / 9 + 10,
        //   offset: (width / 9 + 10) * index,
        //   index,
        // })}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
});
export default CartMaster;

const styles = StyleSheet.create({
  boxCartMaster: {
    //CartMaster.js
    width: 230,
    height: 80,
    borderRadius,
    backgroundColor: '#ffffff',
    marginRight: 10,
    flexDirection: 'row',
    padding: 5,
  },
  activeBoxCartMaster: {
    //CartMaster.js
    width: 230,
    height: 80,
    borderRadius,
    backgroundColor: ctaColor,
    marginRight: 10,
    flexDirection: 'row',
    padding: 5,
  },
  imageCartMaster: {
    //CartMaster.js
    height: 70,
    width: 60,
    borderRadius,
    marginRight: 10,
  },
  boxTextCartMaster: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'space-between',
  },
  textCartMaster: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor: 'yellow',
  },
  infoCartMaster: {
    height: '100%',
    width: 30,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
});
