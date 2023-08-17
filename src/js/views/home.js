import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import perfil from "../../img/perfil.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.contactList);
  return (
    <>
      {store.contactList.map((contact) => {
        return (
          <div key={contact.id} className="container-fluid">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="contact-image"
                src={perfil}
                style={{ maxWidth: "300px" }}
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  <h3>{contact.full_name}</h3>
                </li>
                <li className="list-group-item">
                  <strong>Phone: </strong>
                  {contact.phone}
                </li>
                <li className="list-group-item">
                  <strong>Email: </strong>
                  {contact.email}
                </li>
                <li className="list-group-item">
                  <strong>Address: </strong>
                  {contact.address}
                </li>
                <li className="list-group-item">
                  <span
                    onClick={() => {
                      actions.removeContacts(contact.id);
                    }}
                  >
                    <Link>
                      <i className="fas fa-trash"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to={`/newcontact/${contact.id}`}>
                      <i className="fa-solid fa-pencil ms-2"></i>
                    </Link>
                  </span>
                </li>
              </ul>
              {/* <div className="contact-containter">
              <img
                className="contact-image"
                src={perfil}
                style={{ maxWidth: "200px" }}
              />
              <div className="info-container">
                <p className="name-text">{contact.full_name}</p>
                <p className="info-text">{contact.phone}</p>
                <p className="info-text">{contact.email}</p>
                <p className="info-text">{contact.address}</p>
              </div>
              <div className="buttons-container">
                <span
                  onClick={() => {
                    actions.removeContacts(contact.id);
                  }}
                >
                  <i className="fas fa-trash"></i>
                </span>
                <Link to={`/newcontact/${contact.id}`}>
                  <span>
                    <i className="fa-solid fa-pencil"></i>
                  </span>
                </Link>
              </div>*/}
            </div>
            <br />
          </div>
        );
      })}
    </>
  );
};
