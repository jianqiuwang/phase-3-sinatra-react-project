import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "5px 11px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};
function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        className="link"
        to="/listings"
        exact
        style={linkStyles}
        activeStyle={{
        background:"darkblue"
        }}
      >
        Home
      </NavLink>
      <NavLink
        className="link"
        to="/addnewcar"
        exact
        style={linkStyles}
        activeStyle={{
          background:"darkblue"
        }}
      >
        Add Car
      </NavLink>
      <NavLink
        className="link"
        to="/reviews"
        exact
        style={linkStyles}
        activeStyle={{
        background:"darkblue"
        }}
      >
        Reviews
      </NavLink>
      <NavLink
        className="link"
        to="/addnewreview"
        exact
        style={linkStyles}
        activeStyle={{
        background:"darkblue"
        }}
      >
        Add Review
      </NavLink>
    </div>
  )
}

export default NavBar;