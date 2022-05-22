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
  padding,
  textColor,
  unselectedNaviColor,
} from '../const/GLOBALSTYLE';
import {observer} from 'mobx-react';
import {myState} from '../state/State';

import ButtonCartInfo from './ButtonCartInfo';
import Rating from './Rating';

const ListSpecialist = observer(
  ({navigation, horizontal, width, boxMargin}) => {
    const activeItems = (item, index) => {
      setActiveIndex(index + 1);
    };

    const styles = StyleSheet.create({
      box: {
        flex: 1,
      },
      boxCartSpecialist: {
        // width: '100%',
        width,
        height: 80,
        borderRadius,
        backgroundColor: '#ffffff',
        // marginBottom: 10,
        flexDirection: 'row',
        padding: 7,
      },
      activeBoxCartSpecialist: {
        width,
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
      const boxCart = [styles.boxCartSpecialist];
      boxCart.push(boxMargin);

      const colorFioCartSpecialist = [{color: textColor}];
      const colorSpecCartSpecialist = [{color: unselectedNaviColor}];

      if (activeIndex === index + 1) {
        boxCart.push(styles.activeBoxCartSpecialist);

        colorFioCartSpecialist.push({color: '#ffffff'});
        colorSpecCartSpecialist.push({color: '#ffffff'});
      }
      return (
        <TouchableOpacity onPress={() => activeItems(item, index)}>
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
                <Rating
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
              </View>
              {/* группа избранное и описание */}
              <View style={styles.infoCartSpecialist}>
                <ButtonCartInfo name={nameFavorite} color={colorFavorite} />
                <ButtonCartInfo name={'info'} color={ctaColor} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    const [activeIndex, setActiveIndex] = useState(1);

    return (
      <View style={styles.box}>
        {horizontal ? (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={myState.SPECIALIST}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
          />
        ) : (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={myState.SPECIALIST}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        )}
      </View>
    );
  },
);

export default ListSpecialist;