import React from 'react'
import ContactForm from "../../components/ContactForm/ContactForm.jsx"
import ContactList from "../../components/ContactList/ContactList.jsx"



const ContactsPage = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm/>
      <ContactList/>
    </div>
  )
}

export default ContactsPage
