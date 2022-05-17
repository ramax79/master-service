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
} from 'react-native-calendars';
import DatePicker, {getToday} from 'react-native-modern-datepicker';

import {GS} from '../const/GLOBALSTYLE';

LocaleConfig.locales['ru'] = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  monthNamesShort: [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ],
  dayNames: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  today: 'Сегодня',
};
LocaleConfig.defaultLocale = 'ru';

const WeekDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
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
const DATA = WeekDay;
// console.log('DATA = ' + DATA);
const monthstring = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const monthnumber = new Date().getMonth(); // месяц ->  от 0-11
const year = new Date().getFullYear(); // год 2022
const nowdate = new Date().toLocaleDateString(); // 22.04.2022
let count_day = 0;
getLastDayOfMonth(year, monthnumber); // получаем count day
// console.log('nowdate = ' + nowdate);
const WeekDayMonth = [{week: '', day: null}];
// console.log('день = ' + new Date().getDate().toString()); // получить текущий день
const addWeekDayMonth = () => {
  // создаем массив день недели = число для текущего месяца
  // const count_day = getLastDayOfMonth(year, monthnumber); // получаем количество дней в мес.
  console.log(count_day);
  for (let i = 1; (i = count_day); i++) {
    WeekDayMonth.push({
      week: getWeekDay(new Date(year, monthnumber, i)),
      day: i,
    });
  }
};
addWeekDayMonth();
console.log(WeekDayMonth);
// const getLastDayOfMonth = (year, monthnumber) => {
function getLastDayOfMonth(year, monthnumber) {
  // получаем количество дней в месяце
  let date = new Date(year, monthnumber + 1, 0);
  count_day = date.getDate();
  return count_day;
}
const month = monthnumber => {
  //  получаем название месяца по номеру -> Апрель
  return monthstring[monthnumber];
};
// function getWeekDay (date) {
const getWeekDay = date => {
  //  получаем день недели getWeekDay(new Date(year, monthnumber, 21))
  return WeekDay[date.getDay()];
};
// let date = new Date(2014, 0, 3); // 3 января 2014 года
// // alert(getWeekDay(date)); // ПТ

const DateRecords = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={GS.conteiner}>
      <Modal
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
                {month(monthnumber)}
              </Text>
              <Icon name="arrow-forward" size={25} color="#414BBE" />
            </View>
            <View style={GS.calendarDayWeek}>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={DATA}
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
            </View>

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
          </View>
        </View>
      </Modal>

      <Text>Текущая дата = {nowdate}</Text>
      <Text>День недели = {getWeekDay(new Date(year, monthnumber, 21))}</Text>
      {/* <Calendar firstDay={1} /> */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Месяц = {month(monthnumber)}</Text>
      </TouchableOpacity>
      {/* <DatePicker onSelectedChange={date => setSelectedDate(date)} /> */}

      <Text>onSelectedChange = {selectedDate}</Text>
      <Text>
        Количество дней в мес = {getLastDayOfMonth(year, monthnumber)}
      </Text>
      <View style={GS.boxshadows}>
        <Text style={GS.H2}>Hi</Text>
      </View>
    </View>
  );
};
export default DateRecords;
