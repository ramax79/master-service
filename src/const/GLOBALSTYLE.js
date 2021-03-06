import {StyleSheet, Dimensions} from 'react-native';

export const backgroundColor = '#E9ECEC'; //'#FAFBFC';
export const textColor = '#00184B';
export const ctaColor = '#414BBE';
export const infoColor = '#78C2F8';
export const successColor = '#8ACB1D';
export const errorColor = '#F2523A';
export const unselectedColor = '#E8E9F7';
export const backgroundCardsColor = '#E4E6F5';
export const unselectedNaviColor = '#9298A9';
export const fieldFormColor = '#CBD1DB';
export const addBackgroundColor = '#FEC6B4';
export const textAddBackgroundLightColor = '#EFFBDA';
export const textAddBackgroundDarkColor = '#932907';

export const {width, height} = Dimensions.get('window');
export const borderRadius = 7;
export const marginBottom = 5;
export const marginTop = 15;
export const itemMarginBottom = 10;
export const padding = 7; // рамка у блока, отступ от края рамки до элементов

// fontFamily: 'Inter-Light',
// fontFamily: 'Roboto-Regular',
// Inter-SemiBold

export const GS = StyleSheet.create({
  conteiner: {
    flex: 1,
    margin: 15,
    backgroundColor,
    // paddingBottom: 150,
  },
  boxshadows: {
    backgroundColor: '#fff',

    // shadowColor: '#206AE4',
    // // shadowOpacity: 0.4,
    // shadowOffset: {width: -10, height: 15},
    // // shadowRadius: 5,
    // elevation: 11,
  },

  centeredView: {
    flex: 1,
    // height,
    // width,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    // backgroundColor: 'red',
    // opacity: 0.7,
  },
  modalView: {
    height: height * 0.8,
    width: width * 0.9,
    // opacity: 0.5,
    margin: 10,
    backgroundColor: 'green',
    // borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    // shadowColor: '#206AE4',
    // // shadowOpacity: 0.4,
    // shadowOffset: {width: 10, height: 15},
    // // shadowRadius: 5,
    // elevation: 11,
  },
  buttonDate: {
    borderRadius: 20,
    padding: 10,
    elevation: 14,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor,
    height: 40,
    width: '100%',
  },

  shadowOpacity: {
    //CartMaster.js
    shadowColor: '#206AE4',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 7,
  },

  contentContainer: {
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
    // padding: 11,
  },

  H1: {
    color: textColor,
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    // fontStyle: "normal",
    // fontWeight:'bold',
    // letterSpacing: 11 // дополнительный интервал между символами
    // lineHeight: 12
    // textAlign: 'auto', 'left', 'right', 'center', 'justify'
    // textAlignVertical: 'auto', 'top', 'bottom', 'center'
    // textDecorationLine:'none', 'underline', 'line-through', 'underline line-through'
    // textShadowColor:'' // Цвет текстовой тени
    // textShadowOffset // объект: { width?: number, height?: number }
    // textShadowRadius
    // textTransform 'none', 'uppercase', 'lowercase', 'capitalize'
  },
  H2: {
    color: textColor,
    fontFamily: 'Inter-Bold',
    fontSize: 18,
  },
  Subtitle1: {
    color: textColor,
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
  },
  Subtitle2: {
    color: textColor,
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  Subtitle3: {
    color: unselectedNaviColor,
    fontFamily: 'Inter-Medium',
    fontSize: 20,
  },
  SmallText: {
    color: textColor,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
  },
  extraSmallText: {
    color: textColor,
    fontFamily: 'Inter-Regular',
    fontSize: 10,
  },

  CustomFont: {
    fontFamily: 'Roboto-Regular',
  },

  ButtonText: {
    fontFamily: 'NotoSerif-Italic',
    fontSize: 25,
    padding: 10,
  },
  CustomFontBig: {
    fontFamily: 'AbrilFatface-Regular',
  },
  CustomFontHW: {
    fontFamily: 'IndieFlower-Regular',
  },
});
