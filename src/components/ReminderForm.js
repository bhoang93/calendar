import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import dateFns from "date-fns";
import { toggleModal, addReminder } from "../actions/calendarActions";

const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  position: relative;
  height: 15rem;
  width: 50vw;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const CloseForm = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 2px;
  right: 5px;
  cursor: pointer;
  font-size: 2rem;
`;

const InputTime = styled.input`
  border: none;
`;

const TextArea = styled.textarea`
  width: 20vw;
  border: none;
  height: 30%;
  background-color: ${props => props.backgroundColor};
`;

const Confirm = styled.button`
  border: none;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const ColorGrid = styled.div`
  display: flex;
`;

const ColorPicker = styled.div`
  background-color: ${props => props.backgroundColor}
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-right: 2px;
  cursor: pointer;
  border: ${props =>
    props.backgroundColor === props.currentColor && "2px solid black"};
  `;

const colorRange = ["crimson", "darkblue", "green", "orange"];

const ReminderForm = ({ toggleModal, date, activeIndex, addReminder }) => {
  const [time, setTime] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  const inputTime = e => {
    setTime(e.target.value);
  };

  const inputText = e => {
    if (e.target.value.length <= 30) {
      setText(e.target.value);
    }
  };

  const inputColor = chosenColor => {
    setColor(chosenColor);
  };

  const submitReminder = () => {
    const reminder = {
      activeIndex: activeIndex,
      time: time,
      text: text,
      color: color
    };

    if (time !== "" && text !== "" && color !== "") {
      addReminder(reminder);
    }
  };

  return (
    <ModalContainer>
      <Form>
        <h2>Add Reminder to {dateFns.format(date, "Do MMMM YYYY")}</h2>
        <InputTime onChange={inputTime} value={time} type="time" />
        <TextArea
          onChange={inputText}
          value={text}
          placeholder="Max 30 characters."
          backgroundColor={color}
        />
        <ColorGrid>
          {colorRange.map(colorChoice => {
            return (
              <ColorPicker
                key={colorChoice}
                backgroundColor={colorChoice}
                currentColor={color}
                onClick={() => inputColor(colorChoice)}
              />
            );
          })}
        </ColorGrid>
        <Confirm onClick={submitReminder}>Confirm</Confirm>
        <CloseForm onClick={toggleModal}>&times;</CloseForm>
      </Form>
    </ModalContainer>
  );
};

const mapStateToProps = state => {
  return {
    date: state.calendar.activeDate,
    activeIndex: state.calendar.activeIndex
  };
};

const mapDispatchToProps = { toggleModal, addReminder };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderForm);
