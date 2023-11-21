import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import IntroVideo from './Components/IntroVideo/IntroVideo.jsx';
// import Home from './Pages/Home/Home';
import {AuthProvider} from './Context/authContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ProtectedRoute} from './Components/ProtectedRuote/ProtectedRoute'
// import LoginRegistro  from './Pages/LoginRegistro/LoginRegistro.jsx'
// // import RegistroPage  from './Pages/Registro/RegistroPage.jsx'
// import Recientes from './Pages/Recientes/Recientes.jsx'
// import Categorias from './Pages/Categorias/Categorias.jsx'
// import Generos from './Pages/Generos/Generos.jsx'
// import MiLista from './Pages/MiLista/MiLista.jsx'
// import Lanzamientos from './Pages/Lanzamientos/Lanzamientos.jsx'
import './App.css';
import { Card } from './Components/Card/Card.jsx'

function App() {
  const [showVideo, setShowVideo] = useState(false); //pasar a true una vez que se terminen las pruebas
  // estados para autenticacion y ancho de ventana (renderizado responsive)
  const [isAuth, setIsAuth] = useState(false);
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

  // useEfectf para capturar el ancho de la ventana y pasarlo al estado
  useEffect(() => {
    const handleResize = () => {
      setAnchoVentana(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleAuth = () => {
    setIsAuth((prevAuth) => !prevAuth);
  };

  // funcion manejo de video
  const handleVideoEnd = () => {
    console.log('Video ended');
    setShowVideo(false);
  };

  const movie1 = [
    {
      imgMovie: './Components/Card/assets/IMG.jpeg',
      titulo: 'Avengers - Endgame',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt ut aut repellendus quidem eius corrupti similique eaque dolorem, deleniti voluptas dignissimos earum maxime laborum possimus nostrum. Maxime, aspernatur amet!',
      edad: '+14',
      duracion: '2H 3min',
      genero: 'Accion',
      year: '1990'
    }
  ]

  return (

    movie1.map(card => {
      const { imgMovie, titulo, descripcion, edad, duracion, genero, year } = card
      return (
        <Card
          imgMovie={imgMovie}
          titulo={titulo}
          year={year}
          descripcion={descripcion}
          edad={edad}
          duracion={duracion}
          genero={genero}
        />
      )
    })
    
     
        
        

      // {     
      //   <CssBaseline/>
      //   { showVideo ? (
      //     <IntroVideo onVideoEnd={handleVideoEnd} />
      //   ) : (
      //     <AuthProvider>
      //       <Router>
      //         <Routes>
      //           <Route path="/" element={<Home isAuth={isAuth} anchoVentana={anchoVentana}/>} />
      //           <Route path="/login" element={<LoginRegistro />} />
      //           <Route path="/home" element={<ProtectedRoute><Home isAuth={isAuth} anchoVentana={anchoVentana} /></ProtectedRoute>}/>
      //           <Route path="/recientes" element={<Recientes />} />
      //           <Route path="/categorias" element={<Categorias />} />
      //           <Route path="/generos" element={<Generos />} />
      //           <Route path="/milista" element={<MiLista />} />
      //           <Route path="/lanzamientos" element={<Lanzamientos />} />
      //         </Routes>
      //       </Router>
      //     </AuthProvider>
      //   )} 
      // }
  )
}

export default App;