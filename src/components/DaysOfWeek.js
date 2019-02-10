import React from "react";
import dateFns from "date-fns";
import styled from "styled-components";

const Day = styled.div`
  background-color: #222;
  color: #eee;
  font-size: 1.2rem;
  padding: 0.5rem;
`;

const DaysOfWeek = ({ month }) => {
  const days = [];
  let startDate = dateFns.startOfMonth(`1 ${month}`);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div>{dateFns.format(dateFns.addDays(startDate, i), "dddd")}</div>
    );
  }

  return (
    <>
      {days.map(day => {
        return <Day>{day}</Day>;
      })}
    </>
  );
};

export default DaysOfWeek;
