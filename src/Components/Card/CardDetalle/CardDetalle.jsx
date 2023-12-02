import React, { useState, useRef } from "react";
import Boton from "../../Boton";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import html2canvas from "html2canvas";
import Swal from "sweetalert2";
import { TrailerPlayer } from '../../Banner/Banner2'
import "./CardDetalle.css";

const CardDetalle = ({ movie, trailer }) => {
  const info = movie;
  //console.log('cardDetalle:', trailer.key)
  //console.log("CardDetalle", info);
  const cardRef = useRef(null);

  const IMAGE_PATH = process.env.REACT_APP_URL_IMAGE_TMDB;

  //estado que maneja la visibilidad del trialer
  const [showTrailer, setShowTrailer] = useState(false);


  //funcion para descarga de card
  const downloadAsImage = () => {
    html2canvas(cardRef.current, { useCORS: true }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "cardDetalle.png";
      link.click();
    });
  };

  //funciones para cambio de estado de visiblidad de trailer
  const closeTrailer = () => {
    setShowTrailer(false);
  };

  const playTrailer = () => {
    // si trailer no es null: cambiar el estado
    if (trailer !== null) {
      setShowTrailer(true);
    } else {
      // Mostrar SweetAlert si no hay trailer
      Swal.fire({
        icon: "info",
        title: "Sin Trailer",
        text: "Lo siento, no hay trailer disponible para esta película/serie.",
      });
    }
  };

 //componetes para majeno de informacion y posterior renderizado
  const ChangeLanguage = ({ lenguaje }) => {
    let lenguajeOriginal = ""; // Declarar la variable para evitar problemas
    if (lenguaje === "en") lenguajeOriginal = "Inglés";
    if (lenguaje === "es") lenguajeOriginal = "Español";
    return (
      <p className="idioma original">Idioma Original: {lenguajeOriginal}</p>
    );
  };

  const Anio = () => {
    //codigo Hugo - renderiza desde generos y categorias pero no desde busqueda
    const fechaCompleta = info.first_air_date
      ? info.first_air_date
      : info.release_date;

    //codigo Anto
  //   const fechaCompleta = info && (info.first_air_date || info.release_date);
  //     if (!fechaCompleta) {
  //   return null; // O manejar el caso en que la fecha no esté definida
  // }
    const partesFecha = fechaCompleta.split("-");
    const soloAnio = partesFecha[0];
    return <p className="year">Año:{soloAnio}</p>;
  };


  //componente Card
  const Card = () => {
    return (
      <article className="card-movie" ref={cardRef}>
      <div className="img-container">
        <img
          className="img-pelicula"
          src={`${IMAGE_PATH}${info.poster_path}`}
          alt={info.id}
        />
      </div>
      <div className="info-container">
        <div className="btn-container">
          <Boton Contenido={PlaylistAddCircleIcon} fontSize={"50px"} />
          <Boton 
            Contenido={PlayCircleIcon} 
            fontSize={"50px"}
            funcion={playTrailer}
            disabled={trailer === null}/>  
            {/* Deshabilita el botón si trailer es null */}
          <Boton
            Contenido={DownloadForOfflineIcon}
            fontSize={"50px"}
            funcion={downloadAsImage}
          />
        </div>
        <div className="datos-container">
          <h5 className="titulo">{info.name}</h5>
          <div className="info-movie">
            <ChangeLanguage lenguaje={info.original_language} />
            <p className="duracion">{info.duracion}</p>
            <p className="genero">{info.genre}</p>
            <Anio />
            {/* jajajaja divertite con mi anidamiento */}
            {info.number_of_seasons ? (
              <p className="temporadas">
                {info.number_of_seasons} Temporadas{" "}
                {info.number_of_episodes ? (
                  <span className="capitulos">
                    {info.number_of_episodes} capítulos
                  </span>
                ) : null}
              </p>
            ) : null}
          </div>
          <div className="descripcion">{info.overview}</div>
        </div>
      </div>
    </article>
    )
  }

  //renderizado en CardDetalle
  return (
    <>
    {showTrailer ? (
        <TrailerPlayer trailer={trailer.key} closeBanner={closeTrailer} />
      ) : (
        <Card/>
      ) }
    </>
  );
};

export default CardDetalle;
