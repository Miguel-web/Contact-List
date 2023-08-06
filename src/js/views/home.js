import React from "react";
import "../../styles/home.css";
import CardList from "../component/CardList.jsx";
import { Navbar } from "/workspace/Contact-List-App/src/js/component/navbar.js";

export const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <CardList />
      </div>
    </div>
  );
};
