import React from 'react';
import ReactDOM from 'react-dom/client';
import './PantallaInicial.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const PantallaInicial = () => {






    return (
        <div>

            <div>
                <h1>¡Bienvenido a tu generador de bocadillos!</h1>
                <h2>¡Cuando vas a almorzar tienes dudas a la hora de pedir tu bocadillo!</h2>
                <p>Con este generador aleatorio de bocadillos te ahorramos la molestia de pensar y elegir</p>
            </div>

            <div>
                <button><Link to="/generator">Generar bocadillo</Link></button>
            </div>
            <div>
                <button><Link to="/historial">Ver anteriores bocadillos</Link></button>
            </div>
            <div>
                <button><Link to="/nuevoProducto">Añadir Productos</Link></button>
            </div>

        </div>
    );


}

export default PantallaInicial;