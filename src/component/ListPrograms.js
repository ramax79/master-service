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
  padding,
  textColor,
  unselectedNaviColor,
} from '../const/GLOBALSTYLE';
import ButtonCartInfo from './ButtonCartInfo';
import Rating from './Rating';

const ListPrograms = observer(
  ({navigation, horizontal, width, boxMargin}) => {
    const activeItems = (item, index) => {
      setActiveIndex(index + 1);
    };

    const styles = StyleSheet.create({
      box: {flex: 1},
      boxCartPrograms: {
        //CartMaster.js
        width,
        height: 155,
        borderRadius,
        backgroundColor: '#ffffff',
        // marginRight: 10,
        flexDirection: 'column',
        padding,
      },
      activeBoxCartPrograms: {
        //CartMaster.js
        width,
        height: 155,
        borderRadius,
        backgroundColor: ctaColor,
        // marginRight: 10,
        flexDirection: 'column',
        padding,
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
      boxCart.push(boxMargin);
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
        <TouchableOpacity onPress={() => activeItems(item, index)}>
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
                    <ButtonCartInfo name={nameFavorite} color={colorFavorite} />
                  </View>
                </View>
                <FlatList
                  // extraData={index}
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
                textMargin={{marginLeft:0}}
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
                textMargin={{marginLeft:0}}
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
                textMargin={{marginLeft:0}}
              />
              <ButtonCartInfo name={'info'} color={ctaColor} />
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    const renderShortInfo = ({index, item}) => {
      const colorNameProgram = mobx.toJS(myState).colorNameProgram;
      return (
        <Text key={index} style={[GS.extraSmallText, colorNameProgram]}>
          {`- ${item.trim()}`}
        </Text>
      );
    };

    const [activeIndex, setActiveIndex] = useState(1);

    return (
      <View style={styles.box}>
        {horizontal ? (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={myState.PROGRAMS}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
          />
        ) : (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={myState.PROGRAMS}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        )}
      </View>
    );
  },
);
export default ListPrograms;
