import React from "react";

const ContactItemBody = ({ name, tag }) => {
  return (
    <div className="contact-item__body">
      <p className="contact-item__title">{name}</p>
      <p className="contact-item__username">@{tag}</p>
    </div>
  );
};

export default ContactItemBody;
