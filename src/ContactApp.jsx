import React from "react";
import ContactList from "./ContactList";
import { getData } from "./utils/data";

const ContactApp = () => {
  const contacts = getData();
  return (
    <div className="contact-app">
      <h1>Aplikasi Kontak</h1>
      <h2>Daftar Kontak</h2>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactApp;
