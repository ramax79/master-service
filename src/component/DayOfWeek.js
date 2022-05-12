import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import CurrentGetDate from '../const/CurrentGetDate';
import {observer} from 'mobx-react';
import {myState} from '../state/State';

import {GS, width, ctaColor} from '../const/GLOBALSTYLE';

// const getWeekDays = date => {

const getWeekDays = date => {
  // console.log('getWeekDays = ', date);
  const WeekDayMonth = [];
  // console.log('getWeekDays last_day = ', date.last_day);
  for (let i = 1; i <= date.last_day; i++) {
    WeekDayMonth.push({
      date: new Date(date.year, date.monthnumber, i).toLocaleDateString(),
      week: date.WeekDay[new Date(date.year, date.monthnumber, i).getDay()],
      day: i,
    });
  }
  // console.log(WeekDayMonth);
  return WeekDayMonth;
};

const DayOfWeek = observer(({date, onChange}) => {
  // console.log('date.toLocaleDateString = ', date.toLocaleDateString());
  const activeDay = (item, index) => {
    // console.log(index + 1);
    setActiveDayIndex(index + 1);
    myState.setCurrentDayTime([]);
    myState.setCurrentDayTime(item.date);
    // console.log('item.date = ', item.date);
    // console.log(myState.currentDayTime);
  };

  const [week, setWeek] = useState([]);

  // console.log('DayOfWeek = ', date);
  const currentDate = new CurrentGetDate(date);
  const [activeDayIndex, setActiveDayIndex] = useState(currentDate.current_Day);

  // const flatList = useRef();
  // const moveToTop = index => flatList.current.scrollToIndex({index: index});
  // moveToTop(activeDayIndex);
  useEffect(() => {
    const weekDays = getWeekDays(currentDate);
    setWeek(weekDays);
    myState.setCurrentDayTime([]);
    myState.setCurrentDayTime(new Date().toLocaleDateString());
    // console.log(weekDays);
  }, [date]);

  const renderItem = ({item, index}) => {
    const calendarBox = [GS.calendarBox];
    if (activeDayIndex === index + 1) {
      calendarBox.push(GS.activeCalendarBox);
      // moveToTop(activeDayIndex);
    }
    return (
      <TouchableOpacity
        style={calendarBox}
        onPress={() => activeDay(item, index)}>
        <Text style={GS.Subtitle3}>{item.week}</Text>
        <Text style={GS.H2}>{item.day}</Text>
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
      <View style={GS.calendarDayWeek}>
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
