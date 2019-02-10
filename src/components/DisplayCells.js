import React from "react";
import Cell from "./Cell";

const DisplayCells = ({ month }) => {
  return month.map((day, index) => {
    return (
      <Cell
        key={day.date}
        day={day.date}
        reminders={day.reminders}
        index={index}
      />
    );
  });
};

export default DisplayCells;
