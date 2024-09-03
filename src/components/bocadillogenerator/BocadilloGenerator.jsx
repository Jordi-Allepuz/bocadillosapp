
import React from 'react';
import ReactDOM from 'react-dom/client';
import './BocadilloGenerator.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';

export const  BocadilloGenerator = () => {

    const [tortillas, setTortillas] = useState([]);
    const [tortillasSeleccionadas, setTortillasSeleccionadas] = useState([]);
    const [otros, setOtros] = useState([]);
    const [otrosSeleccionados, setOtrosSeleccionados] = useState([]);

    const [bocadillo, setBocadillo] = useState([]);


    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        try {
            const response = await fetch("/productos.json");
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            const data = await response.json();
            setTortillas(data.tortillas); 
            setOtros(data.otros);        
        } catch (error) {
            console.error('Hubo un problema con la operación fetch:', error);
        }
    };


    
    const onChangeTortillas = (e) => {
        setTortillasSeleccionadas(e);
        const nuevasTortillas = tortillas.filter(tortilla =>
            !e.some(seleccionada => seleccionada.nombre === tortilla.nombre)
        );
        setTortillas(nuevasTortillas);
    };

    const onChangeOtros = (e) => {
        setOtrosSeleccionados(e);
        const nuevosOtros = otros.filter(otro => 
            !e.some(seleccionado => seleccionado.nombre === otro.nombre)
        );
        setOtros(nuevosOtros);
    };

    const generarBocadillo = () => {

        if (tortillas.length === 0 || otros.length === 0) {
            alert("No hay suficientes ingredientes para generar un bocadillo.");
            return;
        }

    const tortillaAleatoria = tortillas[Math.floor(Math.random() * tortillas.length)];

    const otroAleatorio = otros[Math.floor(Math.random() * otros.length)];

    const bocadilloGenerado = [tortillaAleatoria, otroAleatorio];
    
    setBocadillo(bocadilloGenerado);

    obtenerProductos();
    };



    return (
        
            <div>

                <div>
                    <h1>Selecciona las tortillas a eliminar</h1>      
                    <Multiselect
                        className=''
                        options={tortillas} // Options to display in the dropdown
                        selectedValues={tortillasSeleccionadas} // Preselected value to persist in dropdown
                        onSelect={onChangeTortillas} // Function to handle selected items
                        onRemove={onChangeTortillas} // Function to handle removed items
                        displayValue="nombre" // Property name to display in the dropdown options
                        placeholder="Seleccione Tortilla"
                        
                    />
                </div>

                <div>
                    <h1>Selecciona ingredientes a eliminar</h1>      
                    <Multiselect
                        className=''
                        options={otros} // Options to display in the dropdown
                        selectedValues={otrosSeleccionados} // Preselected value to persist in dropdown
                        onSelect={onChangeOtros} // Function to handle selected items
                        onRemove={onChangeOtros} // Function to handle removed items
                        displayValue="nombre" // Property name to display in the dropdown options
                        placeholder="Seleccione Otros Ingrediente"
                        
                    />
                </div>

                <div>
                    <button onClick={generarBocadillo}>Generar bocadillo</button>
                </div>

                <div>
                    <h1>Bocadillo generado</h1>
                    <ul>
                        {bocadillo.map((ingrediente, index) => (
                        <li key={index}>{ingrediente.nombre}</li>
                        ))}
                    </ul>
                </div>

                
            </div>
        );


}

export default BocadilloGenerator;

