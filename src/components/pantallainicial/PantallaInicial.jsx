import React from 'react';
import ReactDOM from 'react-dom/client';
import './PantallaInicial.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BocadilloGenerator from '../bocadillogenerator/BocadilloGenerator';
import NuevoProducto from '../nuevoproducto/NuevoProducto';
import BocadilloHistorial from '../bocadillohistorial/BocadilloHistorial';

export const PantallaInicial = () => {

    const [generatorOpen, setGeneratorOpen] = useState(false);
    const [añadirMaterialOpen, setAñadirMaterialOpen] = useState(false);
    const [historialOpen, setHistorialOpen] = useState(false);


    const abrirGenerator = () => {
        setGeneratorOpen(true);
    }

    const abrirAñadirProducto = () => {
        setAñadirMaterialOpen(true);
    }

    const abrirHistorial = () => {
        setHistorialOpen(true);
    }



    return (
    <>
        {generatorOpen && (
            <>
                <div className="overlay" onClick={() => setGeneratorOpen(false)} style={{ display: 'block' }}></div>
                <div>
                    <BocadilloGenerator
                    modalIsOpen={generatorOpen}
                    setModalIsOpen={setGeneratorOpen}
                    />
                </div>
            </>  
        )}

        {añadirMaterialOpen && (
            <>
                <div className="overlay" onClick={() => setAñadirMaterialOpen(false)} style={{ display: 'block' }}></div>
                <div>
                    <NuevoProducto
                    modalIsOpen={añadirMaterialOpen}
                    setModalIsOpen={setAñadirMaterialOpen}
                    />
                </div>
            </>    
        )}

        {historialOpen && (
            <>
                <div className="overlay" onClick={() => setHistorialOpen(false)} style={{ display: 'block' }}></div>
                <div>
                    <BocadilloHistorial
                    modalIsOpen={historialOpen}
                    setModalIsOpen={setHistorialOpen}
                    />
                </div>
            </>    
        )}


         <div>

                <div>
                    <h1>¡Bienvenido a tu generador de bocadillos!</h1>
                    <h2>¡Cuando vas a almorzar tienes dudas a la hora de pedir tu bocadillo!</h2>
                    <p>Con este generador aleatorio de bocadillos te ahorramos la molestia de pensar y elegir</p>
                </div>

                <div>
                    <button onClick={() => abrirGenerator()}>Generar bocadillo</button>
                </div>

                <div>
                    <button onClick={() => abrirAñadirProducto()}>Añadir Productos</button>
                </div>

                <div>
                    <button onClick={() => abrirHistorial()}>Ver anteriores bocadillos</button>
                </div>
                

            </div>

        </>
       
    );


}

export default PantallaInicial;