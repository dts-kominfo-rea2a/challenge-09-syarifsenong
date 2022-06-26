// Kalian bisa menambahkan CSS di src/components/Header.css
import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>Call a Friend</h1>
      <div>Your friendly contact app</div>
      <div className="titik">
        .........................................................
      </div>
    </div>
  );
};

export default Header;
