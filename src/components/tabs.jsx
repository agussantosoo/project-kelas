import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function tabs({ tab, setTab }) {
  return (
    <Nav className="mb-4" pills>
      <NavItem>
        <NavLink active={tab === 0 ? true : false} onClick={() => setTab(0)}>
          Best Food
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={tab === 1 ? true : false} onClick={() => setTab(1)}>
          Burger
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={tab === 2 ? true : false} onClick={() => setTab(2)}>
          Breads
        </NavLink>
      </NavItem>
    </Nav>
  );
}
