import React from "react";
import { useContactContext } from "./ContactContext";
import { useHistory } from "react-router-dom";
import { useInput } from "./hook";

const EditContact = (props) => {

    const [name, updateName] = useInput(props.match.params.name);
    const [email, updateEmail] = useInput(props.match.params.email);
    const [phone, updatePhone] = useInput(props.match.params.phone);
    const id = props.match.params.id;
    
    const { editContact } = useContactContext();

    const history = useHistory();

    const submit = (event) => {
        event.preventDefault();
        editContact(id, name, email, phone);
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
                <button className="update-button">Update</button>
            </form>
        </>
    );
};

export default EditContact;
