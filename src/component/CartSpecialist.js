import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import {
  borderRadius,
  ctaColor,
  errorColor,
  GS,
  padding,
  textColor,
  unselectedNaviColor,
} from '../const/GLOBALSTYLE';
import {observer} from 'mobx-react';
import {myState} from '../state/State';

import ButtonCartInfo from './ButtonCartInfo';
import MyRating from './MyRating';

const CartSpecialist = observer(
  ({
    navigation,
    id,
    onPress,
    activeIndex,
    index,
    disabled = false,
    infoEnable = true,
    favoriteEnable = true,
    ratingEnable = true,
    ButtonCartInfoName = 'info',
    buttonCartInfoOnPress,
  }) => {
    const enableCartSpecialist = id;
    const item = myState.SPECIALIST.find(i => i.id === id);

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

    const boxCart = [styles.boxCartSpecialist];
    // boxCart.push(boxMargin);

    const colorFioCartSpecialist = [{color: textColor}];
    const colorSpecCartSpecialist = [{color: unselectedNaviColor}];

    if (activeIndex === index + 1) {
      boxCart.push(styles.activeBoxCartSpecialist);
      colorFioCartSpecialist.push({color: '#ffffff'});
      colorSpecCartSpecialist.push({color: '#ffffff'});
      myState.setSpecialistBookingFormated(item.fio);
    }

    let boxStyle = [styles.boxNull];
    let justifyContent = [styles.infoCartSpecialist];
    favoriteEnable
      ? justifyContent.push({justifyContent: 'space-between'})
      : justifyContent.push({justifyContent: 'flex-end'});

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
          {enableCartSpecialist === null ? (
            <Text style={[GS.H1, {color: '#ffffff'}]}>
              Выберите специалиста
            </Text>
          ) : (
            <View style={boxCart}>
              <Image
                source={{uri: item.image}}
                style={styles.imageCartSpecialist}
              />
              {/* box описания */}
              <View style={styles.boxTextCartSpecialist}>
                {/* группа текстовое описание */}
                <View style={{justifyContent: 'space-between'}}>
                  <View style={styles.textCartSpecialist}>
                    <Text style={[GS.Subtitle2, colorFioCartSpecialist]}>
                      {item.fio}
                    </Text>
                    <Text style={[GS.extraSmallText, colorSpecCartSpecialist]}>
                      {item.specialization}
                    </Text>
                  </View>
                  {ratingEnable ? (
                    <MyRating
                      name={'star'}
                      size={15}
                      color={ctaColor}
                      disabled={false}
                      text={item.rating}
                      width={55}
                      height={30}
                      aligncenter={true}
                      textMargin={{marginLeft: 0}}
                    />
                  ) : null}
                </View>
                {/* группа избранное и описание */}
                <View style={justifyContent}>
                  {favoriteEnable ? (
                    <ButtonCartInfo name={nameFavorite} color={colorFavorite} />
                  ) : null}
                  {infoEnable ? (
                    <ButtonCartInfo
                      name={ButtonCartInfoName}
                      color={ctaColor}
                      onPress={buttonCartInfoOnPress}
                    />
                  ) : null}
                </View>
              </View>
            </View>
          )}
        </Pressable>
      </View>
    );
  },
);
export default CartSpecialist;

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  boxNull: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ctaColor,
    borderRadius,
  },
  boxCartSpecialist: {
    width: '100%',
    // width,
    height: 80,
    borderRadius,
    backgroundColor: '#ffffff',
    // marginBottom: 10,
    flexDirection: 'row',
    padding,
  },
  activeBoxCartSpecialist: {
    // width,
    height: 80,
    borderRadius,
    backgroundColor: ctaColor,
    // marginBottom: 10,
    flexDirection: 'row',
    padding,
  },
  imageCartSpecialist: {
    height: '100%',
    width: 60,
    borderRadius,
    marginRight: 10,
  },
  boxTextCartSpecialist: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'space-between',
  },
  textCartSpecialist: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor: 'yellow',
  },
  infoCartSpecialist: {
    height: '100%',
    width: 30,
    // backgroundColor: 'red',
    // justifyContent: 'space-between',
  },
});
