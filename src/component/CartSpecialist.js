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
import {myState} from '../state/State';

import ButtonCartInfo from './ButtonCartInfo';
import Rating from './Rating';

const CartSpecialist = observer(({navigation}) => {
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
    const boxCartSpecialist = [styles.boxCartSpecialist];
    const colorFioCartSpecialist = [{color: textColor}];
    const colorSpecCartSpecialist = [{color: unselectedNaviColor}];

    if (activeIndex === index + 1) {
      boxCartSpecialist.push(styles.activeBoxCartSpecialist);
      colorFioCartSpecialist.push({color: '#ffffff'});
      colorSpecCartSpecialist.push({color: '#ffffff'});
    }
    // console.log(item.foto);
    return (
      <TouchableOpacity onPress={() => activeItems(item, index)}>
        <View style={boxCartSpecialist}>
          <Image source={{uri: item.foto}} style={styles.imageCartSpecialist} />
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
                name={'star-rate'}
                size={15}
                color={ctaColor}
                rating={item.rating}
                width={55}
                height={30}
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
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={myState.SPECIALIST}
        horizontal={true}        
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
});
export default CartSpecialist;

const styles = StyleSheet.create({
  box:{
    flexDirection: 'row',
  },
  boxCartSpecialist: {
    width: 230,
    height: 80,
    borderRadius,
    backgroundColor: '#ffffff',
    // marginRight: 10,
    flexDirection: 'row',
    padding: 5,
  },
  activeBoxCartSpecialist: {
    width: 230,
    height: 80,
    borderRadius,
    backgroundColor: ctaColor,
    marginRight: 10,
    flexDirection: 'row',
    padding: 5,
  },
  imageCartSpecialist: {
    height: 70,
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
