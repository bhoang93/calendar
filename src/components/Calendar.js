import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import dateFns from "date-fns";
import DaysOfWeek from "./DaysOfWeek";
import DisplayCells from "./DisplayCells";

const CellContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 13vw);
  margin: 2rem auto;
  grid-gap: 1px;
`;

const Calendar = ({ date, daysInMonth }) => {
  const month = dateFns.format(date, "MMMM YYYY");

  return (
    <div>
      <h1>{month}</h1>
      <CellContainer>
        <DaysOfWeek month={month} />
        <DisplayCells month={daysInMonth} />
      </CellContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    date: state.calendar.date,
    daysInMonth: state.calendar.daysInMonth
  };
};

export default connect(mapStateToProps)(Calendar);
