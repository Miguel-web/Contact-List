import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light m-0 d-flex justify-content-end">
      <div className="ml-auto">
        <Link to="/GetCard">
          <button className="btn btn-success me-2">Add Contact</button>
        </Link>
      </div>
    </nav>
  );
};
