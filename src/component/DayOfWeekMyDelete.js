import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {format} from 'date-fns';

import CurrentGetDate from '../const/CurrentGetDate';
import {observer} from 'mobx-react';
import {myState} from '../state/State';

import {
  GS,
  width,
  ctaColor,
  backgroundCardsColor,
  unselectedColor,
} from '../const/GLOBALSTYLE';

// const getWeekDays = date => {

const getWeekDays = date => {
  // console.log('getWeekDays = ', date);
  const WeekDayMonth = [];
  // WeekDayMonth.push({date: '', week: '', day: 0});
  // WeekDayMonth.push({date: '', week: '', day: 0});
  // console.log('getWeekDays last_day = ', date.last_day);
  for (let i = 1; i <= date.last_day; i++) {
    WeekDayMonth.push({
      // date: format(new Date(date.year, date.monthnumber, i), 'dd.MM.yyyy'),
      // date: new Date(date.year, date.monthnumber, i).toLocaleDateString('ru-RU'),
      date: new Date(date.year, date.monthnumber, i),
      week: date.WeekDay[new Date(date.year, date.monthnumber, i).getDay()],
      day: i,
    });
    // console.log('i = ', i);

    // console.log('WeekDayMonth[i].week = ', WeekDayMonth[i].week);
    // console.log('WeekDayMonth[i].day = ', WeekDayMonth[i].day);
  }
  // console.log(WeekDayMonth);
  return WeekDayMonth;
};

// const DayOfWeek = observer(({date, onChange}) => {
const DayOfWeek = observer(() => {
  const activeDay = (item, index) => {
    // console.log('item.date = ', item.date);
    setActiveDayIndex(index + 1);
    myState.setCurrentDayTime([]);
    myState.setCurrentDayTime(format(item.date, 'dd.MM.yyyy'));
    myState.setTimeBooking(null);
    myState.setActiveTimeIndex(null);
    myState.setDataBooking(item.date); // записывает активную дату в переменную DataBooking для последующего связывания со временем записи.
  };
  // console.log('this.dataBooking = ', myState.dataBooking);

  useEffect(() => {
    const weekDays = getWeekDays(currentDate);
    setWeek(weekDays);

    myState.setCurrentDayTime([]);
    myState.setTimeBooking(null);
    myState.setActiveTimeIndex(null);
    // myState.setCurrentDayTime(new Date().toLocaleDateString()); // format(new Date(), 'dd.MM.yyyy')             new Date().toLocaleDateString()
    myState.setCurrentDayTime(format(new Date(), 'dd.MM.yyyy'));
    myState.setDataBooking(new Date().toLocaleDateString('ru-RU')); //format(new Date(), 'dd.MM.yyyy')
    myState.setDataBookingFormated();
    // myState.setDataBooking(format(new Date(), 'dd.MM.yyyy'));
    // console.log(weekDays);
    // console.log('useEffect');
    // }, [date]);
  }, []);

  // console.log('date.toLocaleDateString = ', date.toLocaleDateString());
  const [week, setWeek] = useState([]);
  // console.log('DayOfWeek = ', date);
  // const currentDate = new CurrentGetDate(date);
  const currentDate = new CurrentGetDate(new Date());
  const [activeDayIndex, setActiveDayIndex] = useState(currentDate.current_Day);
  // console.log('currentDate = ', currentDate);

  // const flatList = useRef();
  // const moveToTop = index => flatList.current.scrollToIndex({index: index});
  // moveToTop(activeDayIndex);

  const renderItem = ({item, index}) => {
    const calendarBox = [styles.calendarBox];
    if (activeDayIndex === index + 1) {
      calendarBox.push(styles.activeCalendarBox);
      // myState.setDataBookingFormated(
      //   new Date(currentDate.year, currentDate.monthnumber, index),
      // );
      // myState.setDataBookingFormated(item.date);

      // new Date(year, month, date, hours, minutes, seconds, ms)
      // moveToTop(activeDayIndex);
    }
    return (
      <TouchableOpacity
        style={calendarBox}
        onPress={() => activeDay(item, index)}>
        <Text style={GS.Subtitle3}>{item.week}</Text>
        <Text style={GS.H2}>{item.day}</Text>
        {/* <Text style={GS.SmallText}>{item.date}</Text> */}
      </TouchableOpacity>
    );
  };
  return (
    <>
      <TouchableOpacity>
        <Text style={[GS.H2, {color: ctaColor}]}>
          {currentDate.current_month}
        </Text>
      </TouchableOpacity>
      <View style={styles.calendarDayWeek}>
        <FlatList
          // ref={flatList}
          keyExtractor={(item, index) => index.toString()}
          data={week}
          horizontal={true}
          initialScrollIndex={activeDayIndex - 1}
          getItemLayout={(data, index) => ({
            length: width / 9 + 10,
            offset: (width / 9 + 10) * index,
            index,
          })}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </>
  );
});

export default DayOfWeek;

const styles = StyleSheet.create({
  calendarBox: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: backgroundCardsColor,
    borderStyle: 'solid',
    backgroundColor: '#ffffff',
    borderRadius: 7,
    margin: 5,
    height: 64,
    width: width / 9,
  },
  activeCalendarBox: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 7,
    // margin: 5,
    // height: 64,
    // width: width / 9,

    // borderWidth: 1,
    // borderStyle: 'solid',
    borderColor: ctaColor,
    backgroundColor: unselectedColor,
  },

  calendarDayWeek: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    height: 74,
    width: '100%',
  },
});
