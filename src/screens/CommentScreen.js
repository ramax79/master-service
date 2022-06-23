import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {observer} from 'mobx-react';
import {myState} from '../state/State';

import CartPrograms from '../component/CartPrograms';
import {GS} from '../const/GLOBALSTYLE';

const CommentScreen = observer(({navigation, route}) => {
  const {id, rating} = route.params;
  // console.log('idProgram = ', id);

  return (
    <View style={GS.conteiner}>
      <CartPrograms
        id={id}
        // onPress={() => activeItems(item, index)}
        navigation={navigation}
        // activeIndex={activeIndex}
        // index={index}
        disabled={true}
        ratingEnable={true}
        rating={rating}
      />
    </View>
  );
});
export default CommentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
