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
  marginBottom,
  padding,
  successColor,
  textColor,
  unselectedNaviColor,
} from '../const/GLOBALSTYLE';
import {observer} from 'mobx-react';
import {myState} from '../state/State';

import ButtonCartInfo from './ButtonCartInfo';
import Rating from './Rating';

const ListMyBookings = observer(
  ({navigation, horizontal, width, boxMargin}) => {
    // const activeItems = (item, index) => {
    //   setActiveIndex(index + 1);
    // };

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
        flexDirection: 'row',
        padding,
        marginBottom,
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
        // justifyContent: 'space-between',
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
      const boxCart = [styles.boxCart];
      boxCart.push(boxMargin);

      const colorNameCart = [{color: textColor}];
      const colorSpecCart = [{color: unselectedNaviColor}];

      return (
        // <TouchableOpacity onPress={() => activeItems(item, index)}>
        <View style={boxCart}>
          <Image source={{uri: item.image}} style={styles.imageCart} />
          {/* box описания */}
          <View style={styles.boxTextCart}>
            {/* группа текстовое описание */}
            {/* <View style={{justifyContent: 'space-between'}}> */}

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
                <Rating
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
                <Rating
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
                <Rating
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
                <Rating
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
            {/* </View> */}
          </View>
        </View>
        // </TouchableOpacity>
      );
    };

    // const [activeIndex, setActiveIndex] = useState(1);

    return (
      <View style={styles.box}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={myState.filterMYBOOKINGS}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    );
  },
);

export default ListMyBookings;

// const styles = StyleSheet.create({
//   box: {box},
//   boxCartSpecialist: {
//     width: '100%',
//     height: 80,
//     borderRadius,
//     backgroundColor: '#ffffff',
//     marginBottom: 10,
//     flexDirection: 'row',
//     padding: 7,
//   },
//   activeBoxCartSpecialist: {
//     width: '100%',
//     height: 80,
//     borderRadius,
//     backgroundColor: ctaColor,
//     marginBottom: 10,
//     flexDirection: 'row',
//     padding: 7,
//   },
//   imageCartSpecialist: {
//     height: '100%',
//     width: 60,
//     borderRadius,
//     marginRight: 10,
//   },
//   boxTextCartSpecialist: {
//     flex: 1,
//     flexDirection: 'row',
//     // backgroundColor: 'green',
//     justifyContent: 'space-between',
//   },
//   textCartSpecialist: {
//     flex: 1,
//     // justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     // backgroundColor: 'yellow',
//   },
//   infoCartSpecialist: {
//     height: '100%',
//     width: 30,
//     // backgroundColor: 'red',
//     justifyContent: 'space-between',
//   },
// });
