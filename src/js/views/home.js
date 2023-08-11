import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import perfil from "../../img/perfil.png";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.contactList);
  return (
    <>
      {store.contactList.map((contact) => {
        return (
          <div key={contact.id} className="container-fluid">
            <div className="contact-containter">
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
                  <i
                    className={`fa-regular fa-2x ${faTrashCan} contact-button`}
                  ></i>
                </span>
                <Link to={`/newcontact/${contact.id}`}>
                  <span>
                    <i className={`fa-regular fa-2x ${faPen} contact-button`} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
