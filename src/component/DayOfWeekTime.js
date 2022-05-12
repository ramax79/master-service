import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import CurrentGetDate from '../const/CurrentGetDate';
import {observer} from 'mobx-react';
import {myState} from '../state/State';
import {GS, unselectedNaviColor, textColor} from '../const/GLOBALSTYLE';

// const getWeekDays = date => {

const DayOfWeekTime = observer(({date, onChange}) => {
  
  const activeDay = (item, index) => {
    console.log(index);
    // setActiveDayIndex(index + 1);
  };

  // console.log('DayOfWeek = ', date);
  // const currentDate = new CurrentGetDate(date);
  // const [activeDayIndex, setActiveDayIndex] = useState(currentDate.current_Day);

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
      calendarBoxTime = GS.enableCalendarBoxTime;
      myState.setDisableTouch(false);
    } else {
      textCalendarBoxTime.push({color: unselectedNaviColor});
      calendarBoxTime = GS.disableCalendarBoxTime;
      myState.setDisableTouch(true);
    }
    // if (activeDayIndex === index + 1) {
    //   calendarBox.push(GS.activeCalendarBox);
    //   // moveToTop(activeDayIndex);
    // }
    return (
      <TouchableOpacity
        style={calendarBoxTime}
        disabled={myState.disableTouch}
        onPress={() => activeDay(item, index)}>
        <Text style={textCalendarBoxTime}>{item.time}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={GS.calendarDayWeekTime}>
      <Text style={GS.H2}>Выберите время</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={myState.currentDayTime}
        // horizontal={false}
        numColumns={4}
        columnWrapperStyle={GS.columnTime}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
});
export default DayOfWeekTime;
