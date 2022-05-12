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
