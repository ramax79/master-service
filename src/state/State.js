import {makeAutoObservable} from 'mobx';

class State {
  currentDayTime = [];
  disableTouch = false;
  day = {
    '04/28/22': [
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
    '04/29/22': [
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
    '04/30/22': [
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
    '05/04/22': [
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
    '05/07/22': [
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
  MASTER = [
    {
      id: 1,
      fio: 'Русских А.Г',
      fioFull: 'Русских Алла Германовна',
      specialization: 'SPA специалист',
      education: 'Высшая школа массажа',
      rating: '4.8',
      foto: 'https://i.ibb.co/CKQHDyR/Woomen1.jpg',
      info: 'Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности формируют глобальную экономическую сеть и при этом -  смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей. ',
    },
    {
      id: 2,
      fio: 'Иванова А.Г',
      fioFull: 'Иванова Алла Германовна',
      specialization: 'SPA специалист',
      education: 'Высшая школа массажа',
      rating: '4.0',
      foto: 'https://i.ibb.co/x59W5SL/doctor-Woomen1.jpg',
      info: 'Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности формируют глобальную экономическую сеть и при этом -  смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей. ',
    },
    {
      id: 3,
      fio: 'Петрова А.Г',
      fioFull: 'Петрова Алла Германовна',
      specialization: 'SPA специалист',
      education: 'Высшая школа массажа',
      rating: '3.0',
      foto: 'https://i.ibb.co/pygRH1W/doctor-Woomen2.jpg',
      info: 'Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности формируют глобальную экономическую сеть и при этом -  смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. Следует отметить, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей. ',
    },
  ];
  specialization = [
    {id: 1, name: 'SPA специалист'},
    {id: 2, name: 'Массажист'},
    {id: 3, name: 'Косметолог'},
  ];
  colorNameProgram = [];
  colorSpecProgram = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentDayTime(date) {
    this.currentDayTime = this.day[date];
    console.log('-', this.day[date]);
    console.log('date - >', date);
  }
  setDisableTouch(disable) {
    this.disableTouch = disable;
  }

  setColorNameProgram(colors) {
    this.colorNameProgram.length = 0;
    this.colorNameProgram.push({color: `${colors}`});
  }
}

// export default new State();
export const myState = new State();
