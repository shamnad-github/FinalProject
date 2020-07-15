import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import Axios from "axios";

const BASE_URL = 'http://localhost:8080';
const ContactContext = createContext();
let data=[];
export const useContactContext = () => useContext(ContactContext);

const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState(data);

    useEffect(() => {
        Axios.get(`${BASE_URL}/contact/`).then(res => {
            setContacts(res.data);
        })
    }, [])

    const deleteContact = (contactid) => {
        Axios.delete(`${BASE_URL}/contact/${contactid}`).then(() => {
            Axios.get(`${BASE_URL}/contact/`).then(res => {
                setContacts(res.data);
            })
        })
    };

    const addContact = (name, email, phone) => {
        const newContact = {
            name,
            email,
            phone
        };

        Axios.post(`${BASE_URL}/contact`, newContact).then((res) => {
            const newContact = res.data;
            const newContacts = [...contacts, newContact];
            setContacts(newContacts);
        });
    };

    const editContact = (id, name, email, phone) => {
        const newContact = {
            name,
            email,
            phone
        };

        Axios.put(`${BASE_URL}/contact/${id}`, newContact).then((res) => {
            getContacts();
        });
    };

    const getContacts = () => {
        Axios
            .get(`${BASE_URL}/contact`).then((result) => {
                setContacts(result.data);
            });
    };

    return (
        <ContactContext.Provider value={{ contacts, deleteContact, addContact, editContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactProvider;