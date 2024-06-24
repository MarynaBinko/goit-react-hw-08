import { useSelector } from "react-redux"


const ContactList = () => {
    const contacts =useSelector((state)=>state.contacts.items);

  return (
    <div>
      <h2>Contacts List</h2>
      <ul>
        {contacts.map((contact)=>(
            <li key={contact.id}>
                {contact.name} - {contact.phone}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList
