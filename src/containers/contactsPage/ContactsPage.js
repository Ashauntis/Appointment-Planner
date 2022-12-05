import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { ContactForm } from "../../components/contactForm/ContactForm"

export const ContactsPage = (props) => {
  const [errors, setErrors] = useState([]);

  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleContact = (e) => {
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.contacts.forEach((element) => {
      const compare1 = element.name.toLowerCase();
      const compare2 = contact.name.toLowerCase();
      if (compare1 === compare2) {
        setErrors((prev) => ([...prev, 'nameError']))
        console.log('matching name detected!');
      };
    });
    if (errors.length === 0) {
      console.log('No errors, adding contact to list')
      props.addContact(contact);
      setContact(() => ({
        name: '',
        phone: '',
        email: '',
      }));
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          contact={contact}
          setContact={setContact}
          errors={errors}
          setErrors={setErrors}
          handleContact={handleContact}
          handleSubmit={handleSubmit}
        />
        {errors.find((element) => element === 'nameError') &&
          <span style={{color: 'red'}}> {errors.name} </span>
        }
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={props.contacts}/>
      </section>
    </div>
  );
};
