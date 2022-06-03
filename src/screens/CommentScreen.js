import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {observer} from 'mobx-react';
import {myState} from '../state/State';

import CartPrograms from '../component/CartPrograms';
const CommentScreen = observer(() => {
  return (
    <View>
      <CartPrograms
        id={item.id}
        onPress={() => activeItems(item, index)}
        navigation={navigation}
        activeIndex={activeIndex}
        index={index}
        disabled={false}
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
