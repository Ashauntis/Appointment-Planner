import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = (props) => {
  const [appt, setAppt] = useState({
    title: '',
    contact: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setAppt((prev)=> ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAppointment((prev) => ([
      ...prev,
      appt
    ]));

    setAppt(() => ({
      title: '',
      contact: {},
      date: '',
      time: ''
    }))

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          appt={appt}
          setAppt={setAppt}
          contacts={props.contacts}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          data={props.appointments}
        />
      </section>
    </div>
  );
};
