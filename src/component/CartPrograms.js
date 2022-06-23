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
  marginTop,
} from '../const/GLOBALSTYLE';
import ButtonCartInfo from './ButtonCartInfo';
<<<<<<< HEAD
import MyRating from './MyRating';
=======
import {Rating as MyRating} from './Rating';
>>>>>>> 4a49dbcd3f410c943b560bece5c871f186374ee9
import {Rating} from 'react-native-ratings';

const CartPrograms = observer(
  ({
    navigation,
    id,
    onPress,
    infoEnable = true,
    disabled = false,
    ratingEnable = false,
    rating = 0,
    activeIndex,
    index,
    buttonCartInfoOnPress,
  }) => {
    const enableCartPrograms = id;
    console.log('id = ', id);

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
      console.log('item= ', item);
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

    const ratingCompleted = rating => {
      console.log('ok=', rating);
      myState.setMYBOOKINGSRating(rating);
    };

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
                <MyRating
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
                <MyRating
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
                <MyRating
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
                    <Rating
                      type="custom"
                      ratingColor={ctaColor}
                      ratingBackgroundColor={unselectedColor}
                      tintColor="#ffffff"
                      ratingCount={5}
                      imageSize={40}
                      startingValue={rating}
                      onFinishRating={ratingCompleted}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                      }}
                    />
<<<<<<< HEAD

=======
>>>>>>> 4a49dbcd3f410c943b560bece5c871f186374ee9
                    {/* <FlatList
                      keyExtractor={(item, index) => index.toString()}
                      data={star}
                      extraData={star}
                      horizontal={true}
                      contentContainerStyle={{
                        flex: 1,
                        justifyContent: 'center',
                      }}
                      showsHorizontalScrollIndicator={false}
                      renderItem={renderItem}
                    /> */}
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
    // flex: 1,
  },
  boxNull: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: ctaColor,
    borderRadius,
  },
  boxCartPrograms: {
    // flex: 1,
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
    marginTop,
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
    width: '100%',
    marginTop: marginBottom,
    flexDirection: 'row',
    // backgroundColor: 'red',
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
    // flex: 1,
    marginBottom,
    // backgroundColor: 'red',
  },
  boxButtonCart: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
    // marginBottom,
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
