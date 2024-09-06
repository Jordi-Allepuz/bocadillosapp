
import React from 'react';
import ReactDOM from 'react-dom/client';
import './BocadilloGenerator.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { collection, getDocs } from 'firebase/firestore';    
import { db } from '../../firebase/firebaseconfig';
import { MdOutlineCancel } from "react-icons/md";


export const BocadilloGenerator = (modalIsOpen, setModalIsOpen ) => {

    const [tortillas, setTortillas] = useState([]);
    const [tortillasSeleccionadas, setTortillasSeleccionadas] = useState([]);
    const [complementos, setComplementos] = useState([]);
    const [complementosSeleccionados, setComplementosSeleccionados] = useState([]);

    const [bocadillo, setBocadillo] = useState([]);


    useEffect(() => {
        obtenerTortillas();
        obtenerComplementos();
    }, []);


    const obtenerTortillas = async () => {
        try {
            const productosCollectionRef = collection(db, "productos");
    
            const productosSnapshot = await getDocs(productosCollectionRef);
    
            if (!productosSnapshot.empty) {
                const documento = productosSnapshot.docs[0]; // Toma el primer documento
                const documentoId = documento.id;
    
                const tortillasCollectionRef = collection(db, "productos", documentoId, "tortillas");
                const tortillasSnapshot = await getDocs(tortillasCollectionRef);
    
                const tortillas = [];
                tortillasSnapshot.forEach((doc) => {
                    tortillas.push({...doc.data() });
                });
    
                console.log(tortillas);
                setTortillas(tortillas);
            } else {
                console.error("No hay documentos en la colección productos.");
            }
        } catch (error) {
            console.error("Error al obtener las tortillas:", error);
        }
         
    };

    const obtenerComplementos = async () => {
        try {
            const productosCollectionRef = collection(db, "productos");
    
            const productosSnapshot = await getDocs(productosCollectionRef);
    
            if (!productosSnapshot.empty) {
                const documento = productosSnapshot.docs[0]; 
                const documentoId = documento.id;
    
                const complementosCollectionRef = collection(db, "productos", documentoId, "complementos");
                const complementosSnapshot = await getDocs(complementosCollectionRef);
    
                const complementos = [];
                complementosSnapshot.forEach((doc) => {
                    complementos.push({...doc.data() });
                });
    
                console.log(complementos); 
                setComplementos(complementos);
            } else {
                console.error("No hay documentos en la colección productos.");
            }
        } catch (error) {
            console.error("Error al obtener las complementos:", error);
        }
         
    };


    const onChangeTortillas = (e) => {
        setTortillasSeleccionadas(e);
        const nuevasTortillas = tortillas.filter(tortilla =>
            !e.some(seleccionada => seleccionada.nombre === tortilla.nombre)
        );
        setTortillas(nuevasTortillas);
    };

    const onChangeComplementos = (e) => {
        setComplementosSeleccionados(e);
        const nuevosComplementos = complementos.filter(complemento =>
            !e.some(seleccionado => seleccionado.nombre === complemento.nombre)
        );
        setComplementos(nuevosComplementos);
    };


    const generarBocadillo = () => {

        if (tortillas.length === 0 || complementos.length === 0) {
            alert("No hay suficientes ingredientes para generar un bocadillo.");
            return;
        }

        const tortillaAleatoria = tortillas[Math.floor(Math.random() * tortillas.length)];

        const complementoAleatorio = complementos[Math.floor(Math.random() * complementos.length)];

        const bocadilloGenerado = [tortillaAleatoria, complementoAleatorio];

        setBocadillo(bocadilloGenerado);

        obtenerTortillas();
    };

    const cancelarSeleccionTortillas = () => {
        setTortillasSeleccionadas([]);
        setTortillas(tortillas.concat(tortillasSeleccionadas));
    }

    const cancelarSeleccionComplementos = () => {
        setComplementosSeleccionados([]);
        setComplementos(complementos.concat(complementosSeleccionados));
    }

    // const resetForm = () => {

    // };

    const cerrarModal = () => {
        setModalIsOpen(false);
        // resetForm();
    };



    return (

        <div style={{ display: modalIsOpen ? 'block' : 'none' }} className="modal">

            <form onSubmit={(e) => {e.preventDefault(); generarBocadillo(); }}>

                <div className="multiselect-container">
                    <label>Selecciona las tortillas a eliminar</label>
                    <div className="multiselect-row">
                        <Multiselect
                            className=''
                            options={tortillas} // Options to display in the dropdown
                            selectedValues={tortillasSeleccionadas} // Preselected value to persist in dropdown
                            onSelect={onChangeTortillas} // Function to handle selected items
                            onRemove={onChangeTortillas} // Function to handle removed items
                            displayValue="nombre" // Property name to display in the dropdown options
                            placeholder="Seleccione Tortilla"
                        />
                        <button className="cancelar-button" type="button"  onClick={cancelarSeleccionTortillas}>
                            <MdOutlineCancel size={30}/>
                        </button>
                    </div> 
                </div>

                <div className="multiselect-container">
                    <label>Selecciona complementos a eliminar</label>
                    <div className="multiselect-row">
                        <Multiselect
                            className=''
                            options={complementos} // Options to display in the dropdown
                            selectedValues={complementosSeleccionados} // Preselected value to persist in dropdown
                            onSelect={onChangeComplementos} // Function to handle selected items
                            onRemove={onChangeComplementos} // Function to handle removed items
                            displayValue="nombre" // Property name to display in the dropdown options
                            placeholder="Seleccione Complementos"
                        />
                        <button className="cancelar-button"  type="button" onClick={cancelarSeleccionComplementos}>
                            <MdOutlineCancel size={30}/>
                        </button>
                    </div>
                </div>

                <div className="boton-container">
                    <button className="generar-button" type="submit">Generar bocadillo</button>
                </div>

                <div className="bocadillo-container">
                    <ul>
                        {bocadillo.map((ingrediente, index) => (
                            <li key={index}>{ingrediente.nombre}</li>
                        ))}
                    </ul>
                </div>

            </form>
        </div>
    );


}

export default BocadilloGenerator;

