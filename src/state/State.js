import {makeAutoObservable} from 'mobx';
import CurrentGetDate from '../const/CurrentGetDate';

class State {
  currentDayTime = []; // массив времени записи на текущую дату
  disableTouch = false; // используется при отрисовке времении записи на текущую дату, указывает enable ячейка времени или нет
  colorNameProgram = []; // цвет описания для карточки программы, исп. в перечислении что получат клиенты во flatlist
  colorSpecProgram = []; // цвет описания для карточки программы, исп. в перечислении что получат клиенты во flatlist
  activeMyBookings = true; // состояние фильтра просмотра в скрине NyBookings
  activeTimeIndex = null; // активный индекс при выборе времени записи dateSubscribe
  dataBooking = null; // дата записи  2022-05-27T19:00:00.000Z
  timeBooking = null; // время записи 11:00
  specialistBookingFormated = null; // ФИО специалиста для записи на прием Русских А.Г.
  programBookingFormated = null; // название программы для записи на прием Русская красавица
  priceBookingFormated = null; // цена программы для записи на прием
  dataBookingFormated = '-'; // дата записи, отформатированная для карточки бронирования записи 'Пятница, 05.04.2022 | 09:00'
  activeSpecialist = null; // активный специалист используется при выборе из всех специалистов в карточку бронирования
  activeProgram = null; // активная программа используется при выборе из всех специалистов в карточку бронирования

  day = {
    '30.05.2022': [
      {
        time: '9:00',
        enable: false,
      },
      {
        time: '9:30',
        enable: true,
      },
      {
        time: '10:00',
        enable: true,
      },
      {
        time: '10:30',
        enable: true,
      },
      {
        time: '11:00',
        enable: false,
      },
      {
        time: '11:30',
        enable: false,
      },
      {
        time: '12:00',
        enable: true,
      },
      {
        time: '12:30',
        enable: true,
      },
      {
        time: '13:00',
        enable: true,
      },
      {
        time: '13:30',
        enable: true,
      },
      {
        time: '14:00',
        enable: true,
      },
      {
        time: '14:30',
        enable: true,
      },
      {
        time: '15:00',
        enable: true,
      },
      {
        time: '15:30',
        enable: true,
      },
      {
        time: '16:00',
        enable: true,
      },
      {
        time: '16:30',
        enable: true,
      },
      {
        time: '17:00',
        enable: false,
      },
      {
        time: '17:30',
        enable: true,
      },
      {
        time: '18:00',
        enable: true,
      },
      {
        time: '18:30',
        enable: false,
      },
    ],
    '31.05.2022': [
      {
        time: '9:00',
        enable: true,
      },
      {
        time: '9:30',
        enable: true,
      },
      {
        time: '10:00',
        enable: true,
      },
      {
        time: '10:30',
        enable: true,
      },
      {
        time: '11:00',
        enable: true,
      },
      {
        time: '11:30',
        enable: true,
      },
      {
        time: '12:00',
        enable: true,
      },
      {
        time: '12:30',
        enable: true,
      },
      {
        time: '13:00',
        enable: true,
      },
      {
        time: '13:30',
        enable: true,
      },
      {
        time: '14:00',
        enable: true,
      },
      {
        time: '14:30',
        enable: true,
      },
    ],
    '01.06.2022': [
      {
        time: '9:00',
        enable: false,
      },
      {
        time: '9:30',
        enable: true,
      },
      {
        time: '10:00',
        enable: true,
      },
      {
        time: '10:30',
        enable: true,
      },
      {
        time: '11:00',
        enable: false,
      },
      {
        time: '11:30',
        enable: false,
      },
      {
        time: '12:00',
        enable: true,
      },
      {
        time: '12:30',
        enable: true,
      },
      {
        time: '13:00',
        enable: true,
      },
      {
        time: '13:30',
        enable: true,
      },
      {
        time: '14:00',
        enable: true,
      },
      {
        time: '14:30',
        enable: true,
      },
    ],
    '28.05.2022': [
      {
        time: '9:00',
        enable: false,
      },
      {
        time: '9:30',
        enable: true,
      },
      {
        time: '10:00',
        enable: true,
      },
      {
        time: '10:30',
        enable: true,
      },
      {
        time: '11:00',
        enable: false,
      },
      {
        time: '11:30',
        enable: false,
      },
      {
        time: '12:00',
        enable: true,
      },
      {
        time: '12:30',
        enable: true,
      },
      {
        time: '13:00',
        enable: true,
      },
      {
        time: '13:30',
        enable: true,
      },
      {
        time: '14:00',
        enable: true,
      },
      {
        time: '14:30',
        enable: true,
      },
    ],
    '29.05.2022': [
      {
        time: '9:00',
        enable: false,
      },
      {
        time: '9:30',
        enable: true,
      },
      {
        time: '10:00',
        enable: true,
      },
      {
        time: '10:30',
        enable: true,
      },
      {
        time: '11:00',
        enable: false,
      },
      {
        time: '11:30',
        enable: false,
      },
      {
        time: '12:00',
        enable: false,
      },
      {
        time: '12:30',
        enable: false,
      },
      {
        time: '13:00',
        enable: false,
      },
      {
        time: '13:30',
        enable: false,
      },
      {
        time: '14:00',
        enable: false,
      },
      {
        time: '14:30',
        enable: false,
      },
    ],
  };
  SPECIALIST = [
    {
      id: 1,
      fio: 'Русских А.Г',
      fioFull: 'Русских Алла Германовна',
      specialization: 'SPA специалист',
      education: 'Высшая школа массажа',
      rating: '4.8',
      image: 'https://i.ibb.co/CKQHDyR/Woomen1.jpg',
      info: 'Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности формируют глобальную экономическую сеть и при этом -  смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей. ',
    },
    {
      id: 2,
      fio: 'Иванова А.Г',
      fioFull: 'Иванова Алла Германовна',
      specialization: 'SPA специалист',
      education: 'Высшая школа массажа',
      rating: '4.0',
      image: 'https://i.ibb.co/x59W5SL/doctor-Woomen1.jpg',
      info: 'Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности формируют глобальную экономическую сеть и при этом -  смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей. ',
    },
    {
      id: 3,
      fio: 'Петрова А.Г',
      fioFull: 'Петрова Алла Германовна',
      specialization: 'SPA специалист',
      education: 'Высшая школа массажа',
      rating: '3.0',
      image: 'https://i.ibb.co/pygRH1W/doctor-Woomen2.jpg',
      info: 'Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности формируют глобальную экономическую сеть и при этом -  смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей. ',
    },
    {
      id: 4,
      fio: 'Кукушкина А.Г',
      fioFull: 'Кукушкина Алла Германовна',
      specialization: 'SPA специалист',
      education: 'Высшая школа массажа',
      rating: '3.0',
      image: 'https://i.ibb.co/pygRH1W/doctor-Woomen2.jpg',
      info: 'Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности формируют глобальную экономическую сеть и при этом -  смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей. ',
    },
    {
      id: 5,
      fio: 'Дедушкина А.Г',
      fioFull: 'Дедушкина Алла Германовна',
      specialization: 'SPA специалист',
      education: 'Высшая школа массажа',
      rating: '4.9',
      image: 'https://i.ibb.co/pygRH1W/doctor-Woomen2.jpg',
      info: 'Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности формируют глобальную экономическую сеть и при этом -  смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей. ',
    },
  ];
  PROGRAMS = [
    {
      id: 1,
      nameProgram: 'Русская красавица',
      specialization: 'SPA программа',
      shortInfo: `обертывание; расслабляющий массаж расслабляющий массаж; отдых в зоне релакса; чайная церемония`,
      rating: '4.8',
      price: 2000,
      time: 90,
      image: 'https://i.ibb.co/23vbxX6/massage4.jpg',
      info: 'СПА-программа “Гармония тела” – это прекрасное средство для красоты и хорошего настроения.Во время процедуры на тело равномерно наносят специально подобранный состав, а затем оборачивают для согревания. Под воздействием температуры средство начинает работать и позволяют добиться того эффекта, которого невозможно достичь при помощи обычных кремов и масел. Процедура нормализует обменные процессы организма выводит токсины, преображает кожу, она становится подтянутой, упругой, гладкой и приятной на ощупь. В сочетании с массажем эффект от обертываний возрастает в несколько раз. Контуры тела подтягиваются, Ваша кожа выглядит ухоженной, а Вы просто великолепны.',
    },
    {
      id: 2,
      nameProgram: 'Гармония тела',
      specialization: 'SPA программа',
      shortInfo: `обертывание; расслабляющий массаж; отдых в зоне релакса; чайная церемония`,
      rating: '4.0',
      price: 1500,
      time: 90,
      image: 'https://i.ibb.co/7tjp9Vh/masage2.jpg',
      info: 'СПА-программа “Гармония тела” – это прекрасное средство для красоты и хорошего настроения.Во время процедуры на тело равномерно наносят специально подобранный состав, а затем оборачивают для согревания. Под воздействием температуры средство начинает работать и позволяют добиться того эффекта, которого невозможно достичь при помощи обычных кремов и масел. Процедура нормализует обменные процессы организма выводит токсины, преображает кожу, она становится подтянутой, упругой, гладкой и приятной на ощупь. В сочетании с массажем эффект от обертываний возрастает в несколько раз. Контуры тела подтягиваются, Ваша кожа выглядит ухоженной, а Вы просто великолепны.',
    },
    {
      id: 3,
      nameProgram: 'Секрет Клеопатры',
      specialization: 'SPA программа',
      shortInfo: `распаривание в кедровой бочке*;пилинг тела; обертывание; расслабляющий массаж тела; отдых в зоне релакса, чайная церемония.`,
      rating: '4.8',
      price: 3500,
      time: 120,
      image: 'https://i.ibb.co/Qc3G8Dm/masage1.jpg',
      info: 'Египетская царица Клеопатра владела множеством секретов красоты и уделяла внимание всему телу. Мы разработали для Вас комплексную программу по уходу за собой, чтобы после посещения нашего СПА-центра Вы чувствовали себя неотразимой!Вы посетите кедровую бочку или хаммам*, после чего почувствуете, что ваше тело согрелось и готово к дальнейшему уходу. Пилинг тела бережно очистит Вашу кожу, а обертывание обеспечит длительное увлажнение и питание. Затем мастер сделает приятный расслабляющий массаж с аромамаслом. Процедура обладает великолепным увлажняющим свойством, после сеанса кожа становится упругой, повышается эластичность, мягкость, а прикосновения становятся нежными как шелк.',
    },
    {
      id: 4,
      nameProgram: 'Рождение Венеры',
      specialization: 'SPA программа',
      shortInfo: `распаривание в кедровой бочке; обертывание/пилинг на выбор; расслабляющий массаж; отдых в зоне релакса, чайная церемония.`,
      rating: '4.3',
      price: 3000,
      time: 90,
      image: 'https://i.ibb.co/Qc3G8Dm/masage1.jpg',
      info: 'Восхитительный отдых в нашем СПА — эта программа для тех, кто мечтает вырваться из повседневной рутины и отдохнуть, а также напитать тело натуральными компонентами, подаренными самой природой. Кедровая бочка подготавливает тело для последующих процедур. В ней на тело воздействует горячий пар, от чего кожа увлажняется и очищается, открываются поры и вместе с потом из организма выходят вредные вещества. Затем мастер может приступить к проведению процедуры пилинга или обертывания на Ваш выбор. Пилинг – это эффективная процедура ухода за телом, направленная на очищение и обновление клеток кожи, способствующая ее тонизации и детоксикации. Обертывание способствует насыщению поверхностного слоя кожи питательными веществами, увлажняет, восстанавливает упругость, улучшает лимфоток, благодаря чему из организма выводится лишняя жидкость, уходит отечность и лишний вес. Заметить эффект можно уже после первой процедуры — кожа станет более гладкой, шелковистой и нежной на ощупь.',
    },
  ];
  // new Date(year, month, date, hours, minutes, seconds, ms)
  MYBOOKINGS = [
    {
      id: 1,
      nameProgram: 'Русская красавица',
      specialization: 'SPA программа',
      active: true,
      image: 'https://i.ibb.co/23vbxX6/massage4.jpg',
      time: 90,
      price: 2000,
      date: new Date('2022,04,28,9,0'),
      idSpecialist: 1,
    },
    {
      id: 2,
      nameProgram: 'Гармония тела',
      specialization: 'SPA программа',
      active: true,
      image: 'https://i.ibb.co/7tjp9Vh/masage2.jpg',
      time: 90,
      price: 1500,
      date: new Date('2022,04,28,9,0'),
      idSpecialist: 2,
    },
    {
      id: 3,
      nameProgram: 'Секрет Клеопатры',
      specialization: 'SPA программа',
      active: false,
      image: 'https://i.ibb.co/Qc3G8Dm/masage1.jpg',
      time: 120,
      price: 3500,
      date: new Date('2022,04,28,9,0'),
      idSpecialist: 3,
    },
    {
      id: 4,
      nameProgram: 'Рождение Венеры',
      specialization: 'SPA программа',
      active: false,
      image: 'https://i.ibb.co/Qc3G8Dm/masage1.jpg',
      time: 90,
      price: 3000,
      date: new Date('2022,04,28,9,0'),
      idSpecialist: 1,
    },
    {
      id: 5,
      nameProgram: 'Русская красавица',
      specialization: 'SPA программа',
      active: false,
      image: 'https://i.ibb.co/Qc3G8Dm/masage1.jpg',
      time: 90,
      price: 2000,
      date: new Date('2022,04,28,9,0'),
      idSpecialist: 4,
    },
  ];
  filterMYBOOKINGS = [
    {
      id: 1,
      nameProgram: 'Русская красавица',
      specialization: 'SPA программа',
      active: true,
      image: 'https://i.ibb.co/23vbxX6/massage4.jpg',
      time: 90,
      price: 2000,
      date: new Date('2022,04,28,9,0'),
      idSpecialist: 1,
    },
    {
      id: 2,
      nameProgram: 'Гармония тела',
      specialization: 'SPA программа',
      active: true,
      image: 'https://i.ibb.co/7tjp9Vh/masage2.jpg',
      time: 90,
      price: 1500,
      date: new Date('2022,04,28,9,0'),
      idSpecialist: 2,
    },
  ];

  categorySpecialization = [
    {id: 1, name: 'SPA специалист'},
    {id: 2, name: 'Массажист'},
    {id: 3, name: 'Косметолог'},
  ];
  categoryPrograms = [
    {id: 1, name: 'SPA программа'},
    {id: 2, name: 'Массажи'},
    {id: 3, name: 'Косметология'},
    {id: 4, name: 'Пилинг тела'},
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentDayTime(date) {
    // console.log('date - >', date);
    this.currentDayTime = this.day[date];

    // console.log('this.currentDayTime = ', this.currentDayTime);
  }
  setDisableTouch(disable) {
    this.disableTouch = disable;
  }

  setColorNameProgram(colors) {
    this.colorNameProgram.length = 0;
    this.colorNameProgram.push({color: `${colors}`});
  }
  setActiveMyBookings(activeMyBookings) {
    this.activeMyBookings = !activeMyBookings;
  }
  setClearFilterMYBOOKINGS() {
    this.filterMYBOOKINGS.length = 0;
  }
  setAddFilterMYBOOKINGS(item) {
    this.filterMYBOOKINGS = [...item];
  }
  setFilterMybookings() {
    this.filterMYBOOKINGS = this.MYBOOKINGS.filter(item => item.active);
  }

  setDataBooking(date) {
    // console.log('setDataBooking = ', date);
    this.dataBooking = date;
    // console.log('this.dataBookingFormated = ', this.dataBookingFormated);
  }
  setTimeBooking(time) {
    this.timeBooking = time;
    // console.log('this.dataBookingFormated = ', this.dataBookingFormated);
    // console.log('date = ', date);
  }
  setDataBookingFormated() {
    //'Пятница, 05.04.2022 | 09:00'
    const currentDate = new CurrentGetDate(new Date(this.dataBooking));
    // const d = DateF
    let bookingFormated = '';
    this.timeBooking === null
      ? (bookingFormated = '-')
      : (bookingFormated = `${currentDate.WeekDay}, ${currentDate.nowdate} | ${this.timeBooking}`);
    this.dataBookingFormated = bookingFormated;
    // this.dataBookingFormated = this.dataBookingFormated.setHours(hours, min);
    // console.log('this.dataBookingFormated = ', this.dataBookingFormated);
    // console.log('date = ', date);
  }

  setSpecialistBookingFormated(fio) {
    // ФИО специалиста для записи на прием
    this.specialistBookingFormated = fio;
  }
  setProgramBookingFormated(program) {
    // название программы для записи на прием
    this.programBookingFormated = program;
  }
  setPriceBookingFormated(price) {
    // цена программы для записи на прием
    this.priceBookingFormated = price;
  }

  setActiveTimeIndex(time) {
    this.activeTimeIndex = time;
  }
  setActiveSpecialist(specialist) {
    // активный специалист используется при выборе из всех специалистов в карточку бронирования
    this.activeSpecialist = specialist;
  }
  setActiveProgram(program) {
    this.activeProgram = program;
  }
}

// export default new State();
export const myState = new State();
