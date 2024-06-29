import React from "react";
import { Nav,CustomNavLink } from "./NavStyles";
export const Navbar=()=>{
    return(
        <div className="route">
            <Nav>
              <CustomNavLink to="/" label="ToDoList"  />
              <CustomNavLink to="/timer" label="Timer"  />
            </Nav>
            
        </div>
    );
}