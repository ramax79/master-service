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
  ctaColor,
  errorColor,
  GS,
  textColor,
  unselectedNaviColor,
} from '../const/GLOBALSTYLE';
import ButtonCartInfo from './ButtonCartInfo';
import Rating from './Rating';

const MASTER = [
  {
    id: 1,
    fio: 'Русских А.Г',
    fioFull: 'Русских Алла Германовна',
    specialization: 'SPA специалист',
    education: 'Высшая школа массажа',
    rating: '4.8',
    foto: 'https://i.ibb.co/CKQHDyR/Woomen1.jpg',
    info: 'Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности формируют глобальную экономическую сеть и при этом -  смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей. ',
  },
  {
    id: 2,
    fio: 'Иванова А.Г',
    fioFull: 'Иванова Алла Германовна',
    specialization: 'SPA специалист',
    education: 'Высшая школа массажа',
    rating: '4.0',
    foto: 'https://i.ibb.co/x59W5SL/doctor-Woomen1.jpg',
    info: 'Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности формируют глобальную экономическую сеть и при этом -  смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей. ',
  },
  {
    id: 3,
    fio: 'Петрова А.Г',
    fioFull: 'Петрова Алла Германовна',
    specialization: 'SPA специалист',
    education: 'Высшая школа массажа',
    rating: '3.0',
    foto: 'https://i.ibb.co/pygRH1W/doctor-Woomen2.jpg',
    info: 'Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности формируют глобальную экономическую сеть и при этом -  смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей. ',
  },
];

const CartMaster = ({navigation}) => {
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
        data={MASTER}
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
};
export default CartMaster;

const styles = StyleSheet.create({
  boxCartMaster: {
    //CartMaster.js
    width: 230,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginRight: 10,
    flexDirection: 'row',
    padding: 5,
  },
  activeBoxCartMaster: {
    //CartMaster.js
    width: 230,
    height: 80,
    borderRadius: 5,
    backgroundColor: ctaColor,
    marginRight: 10,
    flexDirection: 'row',
    padding: 5,
  },
  imageCartMaster: {
    //CartMaster.js
    height: 70,
    width: 60,
    borderRadius: 5,
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
