import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

import {
  borderRadius,
  ctaColor,
  errorColor,
  GS,
  itemMarginBottom,
  padding,
  successColor,
  textColor,
  unselectedNaviColor,
} from '../const/GLOBALSTYLE';
import {observer} from 'mobx-react';
import {myState} from '../state/State';

import MyRating from './MyRating';
import CartSpecialist from './CartSpecialist';

const ListMyBookings = observer(({navigation}) => {
  const filterMYBOOKINGS = [];
  if (myState.activeMyBookings) {
    // если показывать только активные
    myState.MYBOOKINGS.forEach(item => {
      if (item.active === myState.activeMyBookings) {
        // console.log('item = ', item);
        const itemProgram = myState.PROGRAMS.find(i => i.id === item.idProgram);
        // console.log(itemProgram);
        filterMYBOOKINGS.push({
          nameProgram: itemProgram.nameProgram,
          specialization: itemProgram.specialization,
          image: itemProgram.image,
          time: itemProgram.time,
          price: itemProgram.price,
          active: item.active,
          date: item.date,
          idSpecialist: item.idSpecialist,
          idProgram: item.idProgram,
          id: item.id,
          rating: item.rating,
        });
      }
    });
  } else {
    // если показывать все
    myState.MYBOOKINGS.forEach(item => {
      // console.log('item = ', item);
      const itemProgram = myState.PROGRAMS.find(i => i.id === item.idProgram);
      // console.log(itemProgram);
      filterMYBOOKINGS.push({
        nameProgram: itemProgram.nameProgram,
        specialization: itemProgram.specialization,
        image: itemProgram.image,
        time: itemProgram.time,
        price: itemProgram.price,
        active: item.active,
        date: item.date,
        idSpecialist: item.idSpecialist,
        idProgram: item.idProgram,
        id: item.id,
        rating: item.rating,
      });
    });
    // console.log(itemProgram);
  }

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
    // const boxCart = [styles.boxCart];

    const colorNameCart = [{color: textColor}];
    const colorSpecCart = [{color: unselectedNaviColor}];

    return (
      // <View style={styles.box}>
      <View style={styles.boxCart}>
        <View style={styles.boxPrograma}>
          <Image source={{uri: item.image}} style={styles.imageCart} />
          {/* box описания */}
          <View style={styles.boxTextCart}>
            {/* группа текстовое описание */}

            <View style={styles.textCart}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={[GS.Subtitle2, colorNameCart]}>
                    {item.nameProgram}
                  </Text>
                </View>
                <View>
                  {item.active ? (
                    <Text style={{color: successColor}}> Активная</Text>
                  ) : (
                    <Text style={{color: errorColor}}>Архивная</Text>
                  )}
                </View>
              </View>
              <Text style={[GS.extraSmallText, colorSpecCart]}>
                {item.specialization}
              </Text>
              <View style={{flex: 1, justifyContent: 'space-between'}}>
                <MyRating
                  name={'av-timer'}
                  size={20}
                  color={textColor}
                  text={`${item.time} мин`}
                  width={'100%'}
                  height={35}
                  aligncenter={false}
                  disabled={true}
                  textMargin={{marginLeft: 10}}
                />
                <MyRating
                  name={'currency-rub'}
                  size={20}
                  color={textColor}
                  text={`${item.price} руб`}
                  width={'100%'}
                  height={35}
                  aligncenter={false}
                  disabled={true}
                  textMargin={{marginLeft: 10}}
                />
                <MyRating
                  name={'note-edit-outline'} // note-edit-outline  note-text-outline
                  size={20}
                  color={textColor}
                  text={`пятница, 12.05.2022`}
                  width={'100%'}
                  height={35}
                  aligncenter={false}
                  disabled={true}
                  textMargin={{marginLeft: 10}}
                />
                <MyRating
                  name={'alarm'}
                  size={20}
                  color={textColor}
                  text={`9:00`}
                  width={'100%'}
                  height={35}
                  aligncenter={false}
                  disabled={true}
                  textMargin={{marginLeft: 10}}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{height: 80}}>
          <CartSpecialist
            id={item.idSpecialist}
            onPress={() => navigation.navigate('Специалисты')}
            navigation={navigation}
            activeIndex={0}
            index={0}
            disabled={true}
            favoriteEnable={false}
            ratingEnable={false}
            ButtonCartInfoName={'add-comment'}
            buttonCartInfoOnPress={() =>
              navigation.navigate('Добавить отзыв', {
                id: item.idProgram,
                rating: item.rating,
              })
            }
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.box}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={filterMYBOOKINGS}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
});

export default ListMyBookings;

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  boxCart: {
    // width: '100%',
    // width,
    // height: 155,
    flex: 1,
    borderRadius,
    backgroundColor: '#ffffff',
    // marginBottom: 10,
    flexDirection: 'column',

    marginBottom: itemMarginBottom,
  },
  boxPrograma: {
    flexDirection: 'row',
    paddingLeft: padding,
    paddingTop: padding,
    paddingRight: padding,
  },

  imageCart: {
    height: '100%',
    width: 90,
    borderRadius,
    marginRight: 10,
  },
  boxTextCart: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'space-between',
  },
  textCart: {
    flex: 1,
    alignItems: 'flex-start',
    // backgroundColor: 'yellow',
  },
  infoCart: {
    height: '100%',
    width: 30,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
});
