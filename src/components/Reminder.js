import React from "react";
import styled from "styled-components";

const ReminderContainer = styled.div`
  position: relative;
  background-color: ${props => props.color};
  font-size: 1rem;
  border-radius: 0.75rem;
  padding: 2px 5px;
  margin: 2px;
  color: white;
`;

const Reminder = ({ time, text, color, index, removeReminder }) => {
  return (
    <ReminderContainer color={color}>
      {time} {text}
    </ReminderContainer>
  );
};

export default Reminder;
