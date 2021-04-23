import React from "react";
import { NavLink, Route } from "react-router-dom";
import "./Navigation.css"


const Navigation = () => {
  return (
    <div className="nav-links-container">
      <NavLink className="db-link" activeClassName="selected" to="/matchUp/DB">Dragon Ball</NavLink>
      <NavLink className="yyh-link" activeClassName="selected" to="/matchUp/YYH">Yu Yu Hakusho</NavLink>
      <NavLink className="hxh-link" activeClassName="selected" to="/matchUp/HXH">Hunter X Hunter</NavLink>
    </div>
  )
}

export default Navigation;
