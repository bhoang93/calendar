import dateFns from "date-fns";
import { TOGGLE_MODAL, SET_ACTIVE_DATE, ADD_REMINDER } from "../actions/types";

let date = new Date();
const numberOfDays = dateFns.getDaysInMonth(date);
let daysInMonth = [];
for (let i = 0; i < numberOfDays; i++) {
  daysInMonth.push({
    date: dateFns.addDays(dateFns.startOfMonth(date), i),
    reminders: []
  });
}

const initialState = {
  modalOpen: false,
  activeDate: null,
  activeIndex: null,
  reminders: 0,
  date,
  daysInMonth
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen
      };
    case SET_ACTIVE_DATE:
      return {
        ...state,
        activeDate: action.payload.date,
        activeIndex: action.payload.index
      };
    case ADD_REMINDER:
      let newDaysInMonth = state.daysInMonth;
      newDaysInMonth[action.payload.activeIndex].reminders.push(action.payload);
      newDaysInMonth[action.payload.activeIndex].reminders.sort((a, b) => {
        let firstTime = `2014-02-11 ${a.time}`;
        let secondTime = `2014-02-11 ${b.time}`;
        if (firstTime === secondTime) {
          return 0;
        }
        if (dateFns.isAfter(firstTime, secondTime)) {
          return 1;
        } else {
          return -1;
        }
      });

      return {
        ...state,
        daysInMonth: newDaysInMonth,
        reminders: state.reminders + 1
      };
    default:
      return state;
  }
};
