import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"


const Navigation = () => {
  return (
    <div className="nav-links-container" data-cy="navigation">
      <NavLink className="db-link" data-cy="db-link" activeClassName="selected" to="/matchUp/DB" aria-label="Nav link to open Dragon Ball character list">Dragon Ball</NavLink>
      <NavLink className="yyh-link" data-cy="yyh-link" activeClassName="selected" to="/matchUp/YYH" aria-label="Nav link to open Yu Yu Hakusho character list">Yu Yu Hakusho</NavLink>
      <NavLink className="hxh-link" data-cy="hxh-link" activeClassName="selected" to="/matchUp/HXH" aria-label="Nav link to open Hunter X Hunter character list">Hunter X Hunter</NavLink>
    </div>
  )
}

export default Navigation;
