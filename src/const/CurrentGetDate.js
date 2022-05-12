export default class CurrentGetDate {
  monthstring = [
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
  WeekDay = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  constructor(date) {
    this.monthnumber = date.getMonth(); // месяц ->  от 0-11
    // console.log('date=', date);
    this.year = date.getFullYear(); // год 2022
    this.nowdate = date.toLocaleDateString(); // 26.04.2022
    this.current_Day = date.getDate(); // текущий день 26
    this.current_WeekDay = this.WeekDay[date.getDay()]; // текущий день недели Вт
    this.number_WeekDay = date.getDay(); // текущий день недели числом 0-воскресень
    this.last_day = new Date(this.year, this.monthnumber + 1, 0).getDate(); // последний день месяца
    this.current_month = this.monthstring[this.monthnumber]; // месяц апрель
  }
  // get monthNames() {
  //   return this.monthNames;
  // }
}
