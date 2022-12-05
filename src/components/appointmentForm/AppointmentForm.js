import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker"

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const updateChoice = (e) => {
    if (e.target.name === 'none') return;
    props.handleChange(e)
  }

  return (
    // AppointmentForm
    <form onSubmit={props.handleSubmit}>
      <label>
        Title
        <input
          name='title'
          type='text'
          value={props.appt.title}
          onChange={props.handleChange}
        />
      </label>
      <label>
        Date
        <input
          name='date'
          type='date'
          value={props.appt.date}
          min={getTodayString()}
          onChange={props.handleChange}
        />
      </label>
      <label>
        Time
        <input
          name='time'
          type='time'
          step='300'
          min="00:00"
          max="23:59"
          value={props.appt.time}
          onChange={props.handleChange}
        />
      </label>
      <label>
        Choose a Contact to go with this appointment.
        <ContactPicker
          contacts={props.contacts}
          updateChoice={updateChoice}
        />
      </label>
      <input
        type="submit"
        value="Add"
      />
    </form>
  );
};
