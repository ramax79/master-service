import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ctaColor, fieldFormColor, GS} from '../const/GLOBALSTYLE';

const MySearch = ({name}) => {
  return (
    <>
      <View style={styles.box}>
        <Icon
          name={'search'}
          size={30}
          color={fieldFormColor}
          style={{marginHorizontal: 5}}
        />
        <TextInput
          placeholder={name}
          placeholderTextColor={fieldFormColor}
          maxLength={38}
          // value={name}
          numberOfLines={1}
          style={[GS.SmallText, styles.textInput]}
        />

        {/* <Text
          style={[
            GS.H2,
            {color: fieldFormColor, textAlign: 'left', paddingLeft: 5},
          ]}>
          {name}
        </Text> */}
      </View>
    </>
  );
};
export default MySearch;

const styles = StyleSheet.create({
  box: {
    // 'дата записи' (MyButton.js)
    height: 40,
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
    borderColor: fieldFormColor,
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    // padding: 5,
  },
  textInput: {
    color: fieldFormColor,
    width: '87%',
    // textAlign:
    // paddingLeft: 5,
    // backgroundColor: 'green',
    // paddingTop: 10,
    // marginLeft: 10,
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
});
