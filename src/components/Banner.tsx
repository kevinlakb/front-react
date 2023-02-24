import React from "react";
import "../styles/ButtonHome.css";
import BackgroundImage from "../assets/images/background-image.jpeg";
const styles = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative" as "relative",
  width: "100%",
  height: "100%",
  zIndex: 2,
  opacity: 0.6,
};

const Background: React.FC = () => {
  return (
    <div className="banner-container">
      <div className="banner-image" style={styles}>
      <div className="h-100 row">
  <div className="h-100 d-flex flex-column justify-content-center align-items-center align-items-md-start col-sm-12 col-md-6">
    <p className="text-uppercase text-primary fw-bold mb-2">chair</p>
    <h2 className="mb-2">get all</h2>
    <h1 className="text-uppercase fw-bold mt-1">the good stuff</h1>
    <button className="slide-color">
      <span>Slide Color</span>
      <span>Slide Color</span>
    </button>
  </div>
  <div className="col-md-6">
    <img src="https://www.seekpng.com/png/detail/238-2388691_logo-oferta-png-ultrasupernew-logo.png" alt="Chair" className="img-fluid" />
  </div>
</div>
En este ejemplo, hemos utilizado la clase row para crear una fila y luego hemos dividido la fila en dos columnas utilizando las clases col-sm-12 col-md-6. La primera columna contiene el contenido y la segunda columna contiene una imagen. También hemos utilizado las clases de utilidad de Bootstrap para centrar y alinear el contenido en la columna utilizando d-flex, justify-content-center y align-items-center. En la vista de escritorio, hemos alineado el contenido a la izquierda de la



    </div>
    </div>
  );
};

export default Background;
