import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import perfil from "../../img/perfil.png";

import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const initialValues = {
    full_name: "",
    email: "",
    agenda_slug: "LuisMarin-dev",
    address: "",
    phone: ""
}

const NewContact = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState(initialValues);
    const { id } = useParams();
    console.log(id);
    const handleContact = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value })
    };
    const addNewContact = (event) => {
        event.preventDefault();
        if (id == undefined) {
            actions.addContacts(contact);

        } else {
            actions.updateContacts(contact, id)
        }
    }

    return (
        <div className="container w-100">
            <form clasName="d-flex justify-content-center" onSubmit={addNewContact}>
                <div className="mb-3 col-6">
                    <label for="InputFullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="InputFullName" name="full_name" value={contact.full_name} onChange={(event) => handleContact(event)} />
                </div>
                <div className="mb-3 col-6">
                    <label for="InputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" name="email" value={contact.email} onChange={(event) => handleContact(event)} />
                </div>
                <div className="mb-3 col-6">
                    <label for="PhoneNumber" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="PhoneNumber" name="phone" value={contact.phone} onChange={(event) => handleContact(event)} />
                </div>
                <div className="mb-3 col-6">
                    <label for="InputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="InputAddress" name="address" value={contact.address} onChange={(event) => handleContact(event)} />
                </div>
                <button type="submit" className="btn btn-primary col-6">Save</button>
            </form>
            <Link to="/">or get back to contacts</Link>
        </div>
    );
};

export default NewContact;