import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
  WeekCalendar,
  // AgendaSchedule
} from 'react-native-calendars';
import DatePicker, {getToday} from 'react-native-modern-datepicker';
import DayOfWeek from '../component/DayOfWeek';
import DayOfWeekTime from '../component/DayOfWeekTime';
import CurrentGetDate from '../const/CurrentGetDate';

import {GS, ctaColor} from '../const/GLOBALSTYLE';
import MyButton from '../component/MyButton';

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

const DateSubscribe = () => {
  const [date, setDate] = useState(new Date());
  const currentDate = new CurrentGetDate(date);
  // console.log('DateRecords = ', date);
  // addWeekDayMonth(new Date());
  // const [selectedDate, setSelectedDate] = useState('');
  // const [modalVisible, setModalVisible] = useState(false);
  // const [items, setItems] = useState({
  //   '2022-04-27': [{name: 'test1'}],
  //   '2022-04-28': [{name: 'test2'}],
  // });
  // const [month, setmonth] = useState('');

  // const renderItem = item => {
  //   return (
  //     <TouchableOpacity>
  //       <View style={GS.boxshadows}>
  //         <Text>{item.name}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <View style={GS.conteiner}>
      {/* <Text style={[GS.H2, {color: ctaColor}]}>
        {currentDate.current_month}
      </Text> */}
      <DayOfWeek date={date} onChange={newDate => setDate(newDate)} />
      <DayOfWeekTime date={date} />
      <MyButton name={'Выбрать'} />

      {/* <Agenda
        items={items}
        // loadItemsForMonth={loadItems}
        // selected={new Date()}
        renderItem={renderItem}
      /> */}

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={GS.centeredView}>
          <View style={GS.modalView}>
            <View style={GS.calendarHeader}>
              <Icon name="arrow-back" size={25} color="#414BBE" />
              <Text style={(GS.Subtitle1, {color: '#414BBE'})}>
                {current_month}
              </Text>
              <Icon name="arrow-forward" size={25} color="#414BBE" />
            </View>
            <View style={GS.calendarDayWeek}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={WeekDay}
                scrollEnabled={false}
                // style={GS.contentContainer}
                contentContainerStyle={GS.contentContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <View style={GS.calendarBox}>
                      <Text style={GS.Subtitle1}>{item} </Text>
                    </View>
                  );
                }}
              />
            </View> */}

      {/* <DatePicker
              current={getToday()}
              selected={getToday()}
              mode="calendar"
              style={GS.Subtitle1}
              onSelectedChange={date => setSelectedDate(date)}
            />
            <TouchableOpacity
              style={GS.buttonDate}
              onPress={() => {
                setModalVisible(!modalVisible);
                console.log('ol');
              }}>
              <Text style={GS.Subtitle1}>Выбрать</Text>
            </TouchableOpacity> */}
      {/* <Text style={styles.modalText}>Hello World!</Text> */}
      {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
      {/* </View>
        </View>
      </Modal> */}

      {/* <Text>Текущая дата = {nowdate}</Text>
      <Text>Текущий день = {current_Day}</Text>
      <Text>День недели = {current_WeekDay}</Text> */}
      {/* <Calendar
        // monthFormat={'dd MM yyyy'}
        firstDay={1}
      /> */}
      {/* <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Месяц = {current_month}</Text>
      </TouchableOpacity> */}
      {/* <DatePicker onSelectedChange={date => setSelectedDate(date)} /> */}

      {/* <Text>onSelectedChange = {selectedDate}</Text> */}
      {/* <Text>Количество дней в мес = {count_day}</Text>
      <View style={GS.boxshadows}>
        <Text style={GS.H2}>Hi</Text>
      </View> */}
    </View>
  );
};
export default DateSubscribe;
