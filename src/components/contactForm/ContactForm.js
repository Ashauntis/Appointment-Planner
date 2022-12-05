import React from "react";

export const ContactForm = (props) => {
  return (
    // ContactForm
    <form onSubmit={props.handleSubmit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          value={props.contact.name}
          onChange={props.handleContact}
        />
      </label>
      <label>
        Phone Number
        <input
          name="phone"
          type="tel"
          pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
          value={props.contact.phone}
          onChange={props.handleContact}
        />
      </label>
      <label>
        E-mail
        <input
          name="email"
          type="email"
          value={props.contact.email}
          onChange={props.handleContact}
        />
      </label>
      <input
        type="submit"
        value="Add"
      />
    </form>
  );
};
