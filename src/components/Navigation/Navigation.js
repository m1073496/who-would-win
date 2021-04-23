import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"


const Navigation = () => {
  return (
    <div className="nav-links-container">
      <NavLink className="db-link" to="/matchUp/DB">Dragon Ball</NavLink>
      <NavLink className="yyh-link" to="/matchUp/YYH">Yu Yu Hakusho</NavLink>
      <NavLink className="hxh-link" to="/matchUp/HXH">Hunter X Hunter</NavLink>
    </div>
  )
}

export default Navigation;
