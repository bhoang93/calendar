import { TOGGLE_MODAL, SET_ACTIVE_DATE, ADD_REMINDER } from "./types";

export const toggleModal = e => dispatch => {
  e.preventDefault();

  dispatch({
    type: TOGGLE_MODAL
  });
};

export const setActiveDate = dateData => dispatch => {
  dispatch({
    type: TOGGLE_MODAL
  });

  dispatch({
    type: SET_ACTIVE_DATE,
    payload: dateData
  });
};

export const addReminder = reminder => dispatch => {
  dispatch({
    type: ADD_REMINDER,
    payload: reminder
  });

  dispatch({
    type: TOGGLE_MODAL
  });
};
