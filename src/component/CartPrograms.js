import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';

import {observer} from 'mobx-react';
import * as mobx from 'mobx';
import {myState} from '../state/State';

import {
  borderRadius,
  ctaColor,
  errorColor,
  GS,
  padding,
  unselectedNaviColor,
  textColor,
  marginBottom,
  unselectedColor,
} from '../const/GLOBALSTYLE';
import ButtonCartInfo from './ButtonCartInfo';
import Rating from './Rating';

const CartPrograms = observer(
  ({
    navigation,
    id,
    onPress,
    infoEnable = true,
    disabled = false,
    ratingEnable = false,
    activeIndex,
    index,
    buttonCartInfoOnPress,
  }) => {
    const enableCartPrograms = id;
    const item = myState.PROGRAMS.find(i => i.id === id);
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

    myState.setColorNameProgram(textColor);

    const colorNameProgram = [{color: textColor}];
    const colorSpecProgram = [{color: unselectedNaviColor}];

    if (activeIndex === index + 1) {
      boxCart.push(styles.activeBoxCartPrograms);
      myState.setColorNameProgram('#ffffff');
      colorNameProgram.push({color: '#ffffff'});
      colorSpecProgram.push({color: '#ffffff'});
      myState.setProgramBookingFormated(item.nameProgram);
      myState.setPriceBookingFormated(item.price);
    }

    const shortInfo = item => {
      return item.split(';');
    };

    const renderShortInfo = ({index, item}) => {
      const colorNameProgram = mobx.toJS(myState).colorNameProgram;

      return (
        <Text
          key={index}
          style={[
            GS.extraSmallText,
            styles.textBoxShortInfo,
            colorNameProgram,
          ]}>
          {`- ${item.trim()}`}
        </Text>
      );
    };

    let boxStyle = [styles.boxNull];

    const star = [
      unselectedColor,
      unselectedColor,
      unselectedColor,
      unselectedColor,
      unselectedColor,
    ];

    const starPress = index => {
      console.log(index);
      let i = 0;
      do {
        i <= index ? (star[i] = ctaColor) : (star[i] = '#ffffff');
        i++;
      } while (i <= 4);
      console.log(star);
    };

    const renderItem = ({item, index}) => {
      console.log('indexrender= ', index);
      return (
        <ButtonCartInfo
          name={'star'}
          // color={ctaColor}
          color={item}
          backgroundColor={'#ffffff'}
          size={40}
          onPress={() => starPress(index)}
        />
      );
    };
    // return(

    // )

    return (
      <View style={styles.box}>
        <Pressable
          onPress={onPress}
          disabled={disabled}
          android_ripple={{
            // color: ctaColor,
            foreground: false,
            borderless: false,
          }}
          style={({pressed}) => [
            boxStyle,
            // {
            //   backgroundColor: pressed ? ctaColor : unselectedColor,
            // },
            {opacity: pressed ? 0.1 : 1},
          ]}>
          {enableCartPrograms === null ? (
            <View style={styles.boxEmpty}>
              <Text style={[GS.H1, {color: '#ffffff'}]}>
                Выберите программу
              </Text>
            </View>
          ) : (
            <View style={boxCart}>
              {/* box описания c фото*/}
              <View style={styles.boxInfoCart}>
                <Image
                  source={{uri: item.image}}
                  style={styles.imageCartPrograms}
                />
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
                      <ButtonCartInfo
                        name={nameFavorite}
                        color={colorFavorite}
                      />
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
                  name={'star'}
                  color={ctaColor}
                  size={15}
                  text={item.rating}
                  disabled={false}
                  width={55}
                  height={30}
                  aligncenter={true}
                  textMargin={{marginLeft: 0}}
                />
                <Rating
                  name={'av-timer'} //alarm
                  color={unselectedNaviColor}
                  disabled={true}
                  size={20}
                  text={`${item.time} мин`}
                  width={80}
                  height={30}
                  aligncenter={true}
                  textMargin={{marginLeft: 0}}
                />
                <Rating
                  name={''}
                  color={unselectedNaviColor}
                  size={12}
                  disabled={true}
                  text={`${item.price} руб`}
                  width={70}
                  height={30}
                  aligncenter={true}
                  textMargin={{marginLeft: 0}}
                />
                {infoEnable ? (
                  <ButtonCartInfo
                    name={'info'}
                    color={ctaColor}
                    onPress={buttonCartInfoOnPress}
                  />
                ) : null}
              </View>
              {ratingEnable ? (
                <View style={styles.boxRating}>
                  <Text style={[GS.Subtitle2, {textAlign: 'center'}]}>
                    Оцените программу
                  </Text>
                  <View style={styles.boxStar}>
                    <FlatList
                      keyExtractor={(item, index) => index.toString()}
                      data={star}
                      extraData={star}
                      horizontal={true}
                      // showsVerticalScrollIndicator={false}
                      renderItem={renderItem}
                    />
                    {/* {star.map((item, index) => (
                      <View key={index}>
                        <ButtonCartInfo
                          name={'star'}
                          // color={ctaColor}
                          color={item}
                          backgroundColor={'#ffffff'}
                          size={40}
                          onPress={() => starPress(index)}
                        />
                      </View>
                    ))} */}
                  </View>
                </View>
              ) : null}
            </View>
          )}
        </Pressable>
      </View>
    );
  },
);
export default CartPrograms;

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  boxNull: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: ctaColor,
    borderRadius,
  },
  boxCartPrograms: {
    width: '100%',
    // height: 155,
    borderRadius,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    padding,
  },
  activeBoxCartPrograms: {
    backgroundColor: ctaColor,
  },
  boxRating: {
    width: '100%',
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // paddingTop: 20,
  },
  boxEmpty: {
    width: '100%',
    backgroundColor: ctaColor,
    height: 155,
    borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxStar: {
    // backgroundColor: 'red',
    marginTop: marginBottom,
    flexDirection: 'row',
    justifyContent: 'center',
    // alig
  },
  imageCartPrograms: {
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
    marginBottom,
  },
  boxHeader: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 5,
    // backgroundColor: 'yellow',
  },
  boxName: {
    flex: 1,
    // backgroundColor: 'blue',
  },
});
