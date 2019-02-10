import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "./actions/calendarActions";
import "./App.css";
import ReminderForm from "./components/ReminderForm";

import Calendar from "./components/Calendar";

const App = ({ modalOpen, toggleModal }) => {
  return (
    <div className="App">
      {modalOpen && <ReminderForm />}
      <Calendar />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modalOpen: state.calendar.modalOpen
  };
};

export default connect(
  mapStateToProps,
  { toggleModal }
)(App);
