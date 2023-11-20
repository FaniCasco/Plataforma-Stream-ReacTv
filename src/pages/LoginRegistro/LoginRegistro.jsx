import React from 'react'
import LayoutForm from '../../Layout/LayoutForm/LayoutForm'
import { Login } from '../../Components/Ingreso/Login/Login'
import { Register } from '../../Components/Ingreso/Register/Register'
import Boton from '../../Components/Boton'
import './LoginRegistro.css'

const LoginRegistro = () => {
    return (
        <LayoutForm >
            <div className='ContenedorFormularios'>
                <div className='FormTitulos'>
                    <Boton texto={'iniciar sesion'} backgroundColor={'#003686'} backgroundHover={'#E08400'}/>
                    <Boton texto={'registrarse'} backgroundColor={'#003686'} backgroundHover={'#E08400'}/>
                </div>
                <div className='Forms'>
                    <Login width={'360px'}/>
                    <Register width={'360px'}/>
                </div>
            </div>
        </LayoutForm>
    )
}

export default LoginRegistro
