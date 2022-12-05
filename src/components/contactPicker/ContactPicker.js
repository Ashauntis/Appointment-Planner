import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.updateChoice} name={'contact'}>
      <option value='none'>No contact selected</option>
      {props.contacts.map((contact) => {
        return <option value={contact.name}>{contact.name}</option>
      })
      }
    </select>
  );
};
