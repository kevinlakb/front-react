import React from "react";
import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />

      <div className="content-wrapper">
        <ContentHeader
          title={"Feature Products"}
          breadCrumbLink={"Inicio"}
          breadCrumbActive={"Catalog"}
          route={"/home"}
        />
        <Banner />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
