import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import {observer} from 'mobx-react';
import * as mobx from 'mobx';
import {myState} from '../state/State';

import {
  borderRadius,
  ctaColor,
  errorColor,
  GS,
  textColor,
  unselectedNaviColor,
} from '../const/GLOBALSTYLE';
import ButtonCartInfo from './ButtonCartInfo';
import Rating from './Rating';

const CartPrograms = observer(({navigation}) => {
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
    const boxCart = [styles.boxCartPrograms];
    // console.log('myState.colorNameProgram - ', myState.colorNameProgram);

    myState.setColorNameProgram(textColor);

    const colorNameProgram = [{color: textColor}];
    const colorSpecProgram = [{color: unselectedNaviColor}];

    if (activeIndex === index + 1) {
      boxCart.push(styles.activeBoxCartPrograms);

      myState.setColorNameProgram('#ffffff');

      colorNameProgram.push({color: '#ffffff'});
      colorSpecProgram.push({color: '#ffffff'});
    }
    // console.log(item.foto);
    const shortInfo = item => {
      // console.log(item.split(';'));
      return item.split(';');
    };

    return (
      <TouchableOpacity        
        onPress={() => activeItems(item, index)}>
        <View style={boxCart}>
          {/* box описания c фото*/}
          <View style={styles.boxInfoCart}>
            <Image source={{uri: item.foto}} style={styles.imageCartPrograms} />
            <View style={styles.boxTextCart}>
              {/* группа текстовое описание */}
              <View style={styles.boxHeader}>
                <View style={styles.boxName}>
                  <Text style={[GS.Subtitle2, colorNameProgram]}>
                    {item.nameProgram}
                  </Text>
                  <Text style={[GS.extraSmallText, colorSpecProgram]}>
                    {item.specialization}
                  </Text>
                </View>
                <View style={{height: 30, width: 30}}>
                  <ButtonCartInfo name={nameFavorite} color={colorFavorite} />
                </View>
              </View>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={shortInfo(item.shortInfo)}
                horizontal={false}
                renderItem={renderShortInfo}
              />
            </View>
          </View>
          {/* группа рейтинг описание длительность цена */}
          <View style={styles.boxButtonCart}>
            <Rating
              name={'star-rate'}
              color={ctaColor}
              size={15}
              rating={item.rating}
              width={55}
              height={30}
            />
            <Rating
              name={'alarm'}
              color={unselectedNaviColor}
              size={20}
              rating={`${item.time} мин`}
              width={80}
              height={30}
            />
            <Rating
              name={''}
              color={unselectedNaviColor}
              size={12}
              rating={`${item.price} руб`}
              width={70}
              height={30}
            />
            <ButtonCartInfo name={'info'} color={ctaColor} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderShortInfo = ({index, item}) => {
    const colorNameProgram = mobx.toJS(myState).colorNameProgram;
    // console.log(colorNameProgram);
    return (
      <Text
        key={index}
        style={[
          GS.extraSmallText,
          styles.textBoxShortInfo,
          colorNameProgram,
          // myState.colorNameProgram,
          // {flexShrink: 1},
        ]}>
        {`- ${item.trim()}`}
      </Text>
    );
  };

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <View style={{flexDirection: 'row'}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={myState.PROGRAMS}
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
export default CartPrograms;

const styles = StyleSheet.create({
  boxCartPrograms: {
    //CartMaster.js
    width: 300,
    height: 155,
    borderRadius,
    backgroundColor: '#ffffff',
    marginRight: 10,
    flexDirection: 'column',
    padding: 5,
  },
  activeBoxCartPrograms: {
    //CartMaster.js
    width: 300,
    height: 155,
    borderRadius,
    backgroundColor: ctaColor,
    marginRight: 10,
    flexDirection: 'column',
    padding: 5,
  },
  imageCartPrograms: {
    //CartMaster.js
    // height: 107,
    // width: 90,
    height: '100%',
    width: 90,
    borderRadius,
    marginRight: 10,
  },
  boxTextCart: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'green',
  },
  boxInfoCart: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
    // backgroundColor: 'red',
  },
  boxButtonCart: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
  },
  boxHeader: {
    // flex: 1,
    height: 30,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 5,
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // backgroundColor: 'yellow',
  },
  boxName: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  textBoxShortInfo: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    // backgroundColor: 'red',
  },
});
