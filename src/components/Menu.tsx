import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./types/MenuItem";

const Menu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        {items.map((item, index) => (
          <li className="nav-item" key={index}>
            <Link to={item.route} className="nav-link">
              <i className={`nav-icon ${item.icon}`} />
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
