import React, { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Boton from '../../../components/Boton';
import './HomeMobile.css';

  const MainMobileInvitado = () => {
    const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
    const [botonClicado, setBotonClicado] = useState('');

    const handleDescripcion = (textoBoton) => {
      setBotonClicado(textoBoton);
      setMostrarDescripcion(true);
    };

    const handleCerrarDescripcion = () => {
      setMostrarDescripcion(false);
    };

    const Descripcion = () => {
      return (
        <div className="ContenedorMobile">
          <Boton texto={botonClicado} />
          <div className='DescripcionMobile-Invitado'>
            ¡La descripción está aquí!
          </div>
          <Boton texto={'cerrar'} funcion={handleCerrarDescripcion} />
        </div>
      )
    }
    return (
      <>
        {/* <Banner/> */}
        {!mostrarDescripcion &&
          <ButtonGroup className='GrupoBotonMobile'>
            <Boton texto={'recientes'} funcion={() => handleDescripcion('recientes')} />
            <Boton texto={'categorias'} funcion={() => handleDescripcion('categorias')} />
            <Boton texto={'generos'} funcion={() => handleDescripcion('generos')} />
            <Boton texto={'mi lista'} funcion={() => handleDescripcion('mi lista')} />
            <Boton texto={'lanzamientos'} funcion={() => handleDescripcion('lanzamientos')} />
          </ButtonGroup>}
        {mostrarDescripcion && (<Descripcion />)}
      </>
    )
  };

  const MainMobileLogueado = () => {
    return (
      <>
        {/* <Banner/> */}
        <ButtonGroup className='GrupoBotonMobile'>
          <Boton texto={'recientes'} funcion={() => console.log('recientes')} />
          <Boton texto={'categorias'} funcion={() => console.log('categorias')} />
          <Boton texto={'generos'} funcion={() => console.log('generos')} />
          <Boton texto={'mi lista'} funcion={() => console.log('mi lista')} />
          <Boton texto={'lanzamientos'} funcion={() => console.log('lanzamientos')} />
        </ButtonGroup>
      </>
    )
  };

  const HomeMobile = {
    MainMobileInvitado,
    MainMobileLogueado,
  };


export default HomeMobile;