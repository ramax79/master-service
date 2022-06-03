import React from 'react';
import {View, Text} from 'react-native';

import DayOfWeek from '../component/DayOfWeek';
import DayOfWeekTime from '../component/DayOfWeekTime';
import ButtonBox from '../component/ButtonBox';

import {GS, marginBottom, errorColor, ctaColor} from '../const/GLOBALSTYLE';
import {observer} from 'mobx-react';
import {myState} from '../state/State';
import DayOfWeekMyDelete from '../component/DayOfWeekMyDelete';

// LocaleConfig.locales['ru'] = {
//   monthNames: [
//     'Январь',
//     'Февраль',
//     'Март',
//     'Апрель',
//     'Май',
//     'Июнь',
//     'Июль',
//     'Август',
//     'Сентябрь',
//     'Октябрь',
//     'Ноябрь',
//     'Декабрь',
//   ],
//   monthNamesShort: [
//     'Янв',
//     'Фев',
//     'Мар',
//     'Апр',
//     'Май',
//     'Июн',
//     'Июл',
//     'Авг',
//     'Сен',
//     'Окт',
//     'Ноя',
//     'Дек',
//   ],
//   dayNames: [
//     'Воскресенье',
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота',
//   ],
//   dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
//   today: 'Сегодня',
// };
// LocaleConfig.defaultLocale = 'ru';

// const WeekDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
// const WeekDayObject1 = {...WeekDay}; // получаем {"0": "ВС", "1": "ПН", "2": "ВТ", "3": "СР", "4": "ЧТ", "5": "ПТ", "6": "СБ"}
// const WeekDayObject = WeekDay.reduce(function (target, key, index) {
//   target[index] = 'name:' + key;
//   return target;
// }, {});

//   (sum, current) => ({...sum, ['name']: current}),
//   {},
// );
// return
// 'name':current
// , {});
// console.log('WeekDayObject= ' + WeekDayObject);
// const DATA = Object.entries(WeekDayObject1); // получаем [["0", "ВС"], ["1", "ПН"], ["2", "ВТ"], ["3", "СР"], ["4", "ЧТ"], ["5", "ПТ"], ["6", "СБ"]]
// const DATA = WeekDay;
// console.log('DATA = ' + DATA);

// getWeekDay(new Date(year, monthnumber, current_Day))

// currentGetDate(new Date());
// currentGetDate(new Date(2022, 2, 26));
// currentGetDate(new Date(2022, 2, 26));
// getLastDayOfMonth(year, monthnumber); // получаем count day

// const [Number_weekDay, setNumber_weekDay] = useState('');

// console.log('nowdate = ' + nowdate);

// console.log('день = ' + new Date().getDate().toString()); // получить текущий день
// const addWeekDayMonth = date => {
//   // создаем массив день недели = число для текущего месяца
//   // const count_day = getLastDayOfMonth(year, monthnumber); // получаем количество дней в мес.
//   // currentGetDate(new Date(2022, 2, 26));
//   // const
//   currentGetDate(date);
//   console.log(last_day);
//   for (let i = 1; (i = last_day); i++) {
//     WeekDayMonth.push({
//       week: getWeekDay(new Date(year, monthnumber, i)),
//       day: i,
//     });
//   }
//   console.log(WeekDayMonth.length);
// };

// addWeekDayMonth();
// console.log(WeekDayMonth);
// const getLastDayOfMonth = (year, monthnumber) => {
//   // function getLastDayOfMonth(year, monthnumber) {
//   // получаем количество дней в месяце
//   // let date = new Date(year, monthnumber + 1, 0).getDate();
//   last_day = new Date(year, monthnumber + 1, 0).getDate();
//   return last_day;
// };

// const month = monthnumber => {
//   //  получаем название месяца по номеру -> Апрель
//   return monthstring[monthnumber];
// };

// function getWeekDay (date) {
// const getWeekDay = date => {
//   //  получаем день недели getWeekDay(new Date(year, monthnumber, 21))
//   // setNumber_weekDay(WeekDay[date.getDay()]);
//   return WeekDay[date.getDay()];
// };
// let date = new Date(2014, 0, 3); // 3 января 2014 года
// alert(getWeekDay(date)); // ПТ

const DateSubscribe = observer(({navigation}) => {
  const onPress = () => {
    myState.setDataBookingFormated();
    // console.log('myState.dataBookingFormated = ', myState.dataBookingFormated);
    navigation.navigate('Записаться');
  };

  return (
    <View style={GS.conteiner}>
      <DayOfWeek />
      {/* <DayOfWeekMyDelete /> */}
      <DayOfWeekTime />
      {myState.timeBooking === null ? (
        <Text style={(GS.SmallText, {color: errorColor})}>
          Выберите время записи
        </Text>
      ) : null}
      <View style={{marginBottom}}></View>
      {myState.timeBooking === null ? (
        <ButtonBox
          textButton={'Выбрать'}
          onPress={onPress}
          box={true}
          disabled={true}
        />
      ) : (
        <ButtonBox
          textButton={'Выбрать'}
          onPress={onPress}
          box={true}
          disabled={false}
          backgroundcolor={ctaColor}
          fontcolor={'#ffffff'}
        />
      )}
    </View>
  );
});
export default DateSubscribe;
