import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { MenuItem } from "./types/MenuItem";

const menuItems: MenuItem[] = [
  {
    title: "Inicio",
    route: "/home",
    icon: "fas fa-th",
  },
  {
    title: "Catalogo",
    route: "/catalog",
    icon: "fa-solid fa-shop",
  },
];

const SidebarContainer: React.FC = () => {
  return (
    <aside className="main-sidebar sidebar-light-primary elevation-4">
      <Link to={"#"} className="brand-link">
        <i
          className="fa fa-university ml-4 mt-2 mb-2 mr-3"
          aria-hidden="true"
        ></i>
        <span className="brand-text font-weight-light">Whatoko Retail</span>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">&nbsp;</div>
          <div className="info">&nbsp;</div>
          <div className="info">
            <Link to={"#"} className="d-block">
              Menu Principal
            </Link>
          </div>
        </div>
        <Menu items={menuItems} />
      </div>
    </aside>
  );
};

export default SidebarContainer;
