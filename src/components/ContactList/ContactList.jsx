import Contact from "../Contact/Contact";

const ContactList = ({ contactList, handleDelete }) => {
    return <ul>
        {contactList.map(contact => <Contact key={contact.id} contact={contact} handleDelete={handleDelete} />)}
    </ul>
};


export default ContactList;