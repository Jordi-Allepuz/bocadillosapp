import React from 'react';
import ReactDOM from 'react-dom/client';
import './BocadilloHistorial.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

export const  BocadilloHistorial= (modalIsOpen, setModalIsOpen) => {

    return (
        <div style={{ display: modalIsOpen ? 'block' : 'none' }} className="modal">
            <h1>Historial de anteriores Bocadillos</h1>
            

        </div>

        
        
    );

}

export default BocadilloHistorial;