import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"


const Navigation = () => {
  return (
    <div className="nav-links-container" data-cy="navigation">
      <NavLink className="db-link" data-cy="db-link" activeClassName="selected" to="/matchUp/DB">Dragon Ball</NavLink>
      <NavLink className="yyh-link" data-cy="yyh-link" activeClassName="selected" to="/matchUp/YYH">Yu Yu Hakusho</NavLink>
      <NavLink className="hxh-link" data-cy="hxh-link" activeClassName="selected" to="/matchUp/HXH">Hunter X Hunter</NavLink>
    </div>
  )
}

export default Navigation;
