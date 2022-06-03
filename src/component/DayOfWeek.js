import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {format} from 'date-fns';
import {
  GS,
  marginBottom,
  errorColor,
  ctaColor,
  backgroundColor,
  textColor,
  unselectedNaviColor,
  unselectedColor,
  backgroundCardsColor,
} from '../const/GLOBALSTYLE';
import {observer} from 'mobx-react';
import {myState} from '../state/State';

import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import 'moment/locale/ru';

const DayOfWeekMy = observer(() => {
  useEffect(() => {
    // const weekDays = getWeekDays(currentDate);
    // setWeek(weekDays);

    myState.setCurrentDayTime([]);
    myState.setTimeBooking(null);
    myState.setActiveTimeIndex(null);
    // myState.setCurrentDayTime(new Date().toLocaleDateString()); // format(new Date(), 'dd.MM.yyyy')             new Date().toLocaleDateString()
    // moment('2022-02-25T11:22:36+05:00').format('DD MM YYYY hh:mm:ss'),

    // myState.setCurrentDayTime(format(new Date(), 'dd.MM.yyyy'));
    myState.setCurrentDayTime(moment(new Date()).format('DD.MM.YYYY'));
    myState.setDataBooking(new Date().toLocaleDateString('ru-RU')); //format(new Date(), 'dd.MM.yyyy')
    myState.setDataBookingFormated();
    // myState.setDataBooking(format(new Date(), 'dd.MM.yyyy'));
    // console.log('setCurrentDayTime moment = ', myState.currentDayTime);
    // console.log('DataBooking = ', myState.dataBooking);
    // console.log('useEffect');
    // }, [date]);
  }, []);

  const activeDay = selectedDate => {
    // console.log('selectedDate = ', selectedDate);
    // console.log('format selectedDate = ', format(selectedDate, 'dd.MM.yyyy'));
    // setActiveDayIndex(index + 1);
    myState.setCurrentDayTime([]);
    // myState.setCurrentDayTime(format(selectedDate, 'dd.MM.yyyy'));
    // console.log('currentDayTime activ moment= ', myState.currentDayTime);
    // console.log(
    //   'currentDayTime activ moment= ',
    //   moment(selectedDate).format('DD.MM.YYYY'),
    // );
    myState.setCurrentDayTime(moment(selectedDate).format('DD.MM.YYYY'));

    myState.setTimeBooking(null);
    myState.setActiveTimeIndex(null);
    myState.setDataBooking(selectedDate); // записывает активную дату в переменную DataBooking для последующего связывания со временем записи.
  };

  return (
    <CalendarStrip
      scrollable={false}
      // calendarAnimation={{type: 'sequence', duration: 30}}
      // daySelectionAnimation={{
      //   type: 'border',
      //   duration: 200,
      //   borderWidth: 1,
      //   borderHighlightColor: 'red',
      //   highlightColor: 'red',
      //   borderRadius: 100,
      // }}
      style={{
        height: 150,
        paddingTop: 10,
        paddingBottom: 5,
        borderRadius: 7,
      }}
      dayContainerStyle={{
        borderWidth: 1,
        borderColor: backgroundCardsColor,
        borderRadius: 5,
        height: 65,
        width: 40,
        // paddingBottom: 10,
      }}
      // innerStyle={{height: 265}}
      calendarColor={'#ffffff'}
      // calendarHeaderStyle={[GS.H2, {color: ctaColor}]}
      calendarHeaderStyle={{
        color: ctaColor,
        fontFamily: 'Inter-Bold',
        fontSize: 18,
      }}
      // calendarHeaderContainerStyle={[GS.H2, {color: ctaColor}]}
      // calendarHeaderContainerStyle
      dateNumberStyle={[GS.H2, {color: textColor}]}
      dateNameStyle={[GS.SmallText, {color: unselectedNaviColor}]}
      // styleWeekend={true}
      // weekendDateNumberStyle={{color: 'red'}}
      // weekendDateNameStyle={{color: 'red'}}
      // iconContainer={{height: 100}}
      // iconStyle={{color: 'red'}}
      iconContainer={{flex: 0.1}}
      highlightDateContainerStyle={{
        backgroundColor: unselectedColor,
        borderWidth: 1,
        borderColor: ctaColor,
        // height: 100,
      }}
      highlightDateNumberStyle={[GS.H2, {color: textColor}]}
      highlightDateNameStyle={[GS.SmallText, {color: unselectedNaviColor}]}
      // highlightDateNumberStyle={
      //             activeDate === undefined ? 'red' : numberColorON
      //           }
      //           highlightDateNameStyle={
      //             activeDate === undefined ? dayColorOFF : dayColorON
      //           }

      selectedDate={new Date()}
      onDateSelected={selectedDate => {
        activeDay(selectedDate);
        // console.log(selectedDate);
      }}
      // headerText={'header'}
    />
  );
});
export default DayOfWeekMy;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContens: 'center',
  },
});
