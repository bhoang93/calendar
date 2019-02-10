import React from "react";
import { connect } from "react-redux";
import { setActiveDate } from "../actions/calendarActions";
import dateFns from "date-fns";
import styled from "styled-components";
import Reminder from "./Reminder";
import { Scrollbars } from "react-custom-scrollbars";

const DateCell = styled.div`
  display: inline-block;
  position: relative;
  height: 10vw;
  border: 1px solid #eee;
  text-align: left;
  padding: 1rem;

  font-size: 2rem;
  color: #ccc;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ccc;
    color: #fff;
  }
`;

const ReminderList = styled.div`
  height: 60%;
`;

const ReminderButton = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  border: none;
  cursor: pointer;
  color: #888;
`;

const Cell = ({ day, index, setActiveDate, reminders }) => {
  return (
    <DateCell>
      {dateFns.getDate(day)}
      <ReminderList>
        <Scrollbars>
          {reminders.length > 0 &&
            reminders.map(reminder => {
              return (
                <Reminder
                  index={index}
                  color={reminder.color}
                  text={reminder.text}
                  time={reminder.time}
                  key={reminder.index + reminder.time}
                />
              );
            })}
        </Scrollbars>
      </ReminderList>
      <ReminderButton onClick={() => setActiveDate({ date: day, index })}>
        +
      </ReminderButton>
    </DateCell>
  );
};

const mapStateToProps = state => {
  return { remindersNumber: state.calendar.reminders };
};

const mapDispatchToProps = { setActiveDate };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
