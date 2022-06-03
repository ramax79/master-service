import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import CurrentGetDate from '../const/CurrentGetDate';
import {observer} from 'mobx-react';
import {myState} from '../state/State';
import {
  GS,
  unselectedNaviColor,
  textColor,
  ctaColor,
  backgroundCardsColor,
  unselectedColor,
} from '../const/GLOBALSTYLE';

// const getWeekDays = date => {

const DayOfWeekTime = observer(() => {
  const activeTime = (item, index) => {
    myState.setActiveTimeIndex(index + 1);
    myState.setTimeBooking(item.time); // записывает активную дату в переменную DataBookingFormated для последующего связывания со временем записи.
  };
  // console.log('this.timeBooking = ', myState.timeBooking);
  // console.log('DayOfWeek = ', date);
  // const currentDate = new CurrentGetDate(date);

  // useEffect(() => {
  //   const weekDays = getWeekDays(currentDate);
  //   setWeek(weekDays);
  //   // console.log(weekDays);
  // }, [date]);

  const renderItem = ({item, index}) => {
    let calendarBoxTime = [];

    const textCalendarBoxTime = [GS.Subtitle2];
    if (item.enable) {
      textCalendarBoxTime.push({color: textColor});
      calendarBoxTime = [styles.enableCalendarBoxTime];
      myState.setDisableTouch(false);
    } else {
      textCalendarBoxTime.push({color: unselectedNaviColor});
      calendarBoxTime = [styles.disableCalendarBoxTime];
      myState.setDisableTouch(true);
    }

    if (myState.activeTimeIndex === index + 1) {
      calendarBoxTime.push(styles.activeCalendarBoxTime);
      // console.log('activ = ', index + 1);
      // moveToTop(activeDayIndex);
    }
    return (
      <TouchableOpacity
        style={calendarBoxTime}
        disabled={myState.disableTouch}
        onPress={() => activeTime(item, index)}>
        <Text style={textCalendarBoxTime}>{item.time}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.calendarDayWeekTime}>
      <Text style={GS.H2}>Выберите время</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={myState.currentDayTime}
        numColumns={4}
        columnWrapperStyle={styles.columnTime}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        extraData={myState.activeTimeIndex}
      />
    </View>
  );
});
export default DayOfWeekTime;

const styles = StyleSheet.create({
  calendarDayWeekTime: {
    flex: 1,
    marginVertical: 10,
  },
  columnTime: {
    justifyContent: 'space-between',
  },
  activeCalendarBoxTime: {
    borderColor: ctaColor,
    backgroundColor: unselectedColor,
  },

  enableCalendarBoxTime: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    height: 40,
    width: 70,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: ctaColor,
    borderStyle: 'solid',
  },
  disableCalendarBoxTime: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    height: 40,
    width: 70,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: backgroundCardsColor,
    borderStyle: 'solid',
  },
});
