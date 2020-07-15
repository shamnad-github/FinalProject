import React from "react";
import { useContactContext } from "./ContactContext";
import { Link } from 'react-router-dom';
import "./ContactList.css";
const ContactList = () => {
    const { contacts, deleteContact } = useContactContext();

    return (
        <table className="contacts-table">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                {contacts.map((contact, i) => (
                    <tr key={i}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td><Link to={`/edit/${contact.id},${contact.name},${contact.email},${contact.phone}`}>Edit</Link></td>
                        <td><Link onClick={() => { deleteContact(contact.id) }}>Delete</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ContactList;