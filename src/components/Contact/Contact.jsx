import s from "./Contact.module.css"

const Contact = ({ contact, handleDelete }) => {
    return <li className={s.listItem}>
        <div className={s.itemBox}>
            <p className={s.name}>{contact.name}</p>
            <p className={s.number}>{contact.number}</p>
        </div>
        <button onClick={() => handleDelete(contact.id)} className={s.button}>DELETE</button>
    </li>
};


export default Contact;