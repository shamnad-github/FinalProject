import React from "react";
import { useContactContext } from "./ContactContext";
import { useInput } from "./hook";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
    const [name, updateName, resetName] = useInput("");
    const [email, updateEmail, resetEmail] = useInput("");
    const [phone, updatePhone, resetPhone] = useInput("");

    const { addContact } = useContactContext();

    const history = useHistory();

    const submit = (event) => {
        event.preventDefault();
        addContact(name, email, phone);
        resetName();
        resetEmail();
        resetPhone();
        history.push("/");
    };

    return (
        <>
            <h1>Add Contact</h1>
            <form onSubmit={submit} className="contact-form">
                <label htmlFor="name">Name:</label>
                <br></br>
                <input
                    id="name"
                    value={name}
                    onChange={updateName}
                    type="text"
                    placeholder="name..."
                    required
                />
                <br></br>
                <label htmlFor="email">Email:</label>
                <br></br>
                <input
                    id="email"
                    value={email}
                    onChange={updateEmail}
                    type="text"
                    placeholder="email..."
                    required
                />
                 <br></br>
                <label htmlFor="phone">Phone:</label>
                <br></br>
                <input
                    id="phone"
                    value={phone}
                    onChange={updatePhone}
                    type="text"
                    placeholder="Phone..."
                    required
                />
                <button className="add-button">Add</button>
            </form>
        </>
    );
};

export default ContactForm;
