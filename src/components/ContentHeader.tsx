import React from "react";
import { Link } from "react-router-dom";
import { BreadCrumb } from "./types/BreadCrumb";



const ContentHeader: React.FC<BreadCrumb> = ({title, breadCrumbLink, breadCrumbActive, route}) => {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">{title}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to={route}>{breadCrumbLink}</Link></li>
              <li className="breadcrumb-item active">{breadCrumbActive}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
