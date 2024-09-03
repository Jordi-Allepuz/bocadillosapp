import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {PantallaInicial} from './components/pantallainicial/PantallaInicial';
import {BocadilloResult} from './components/bocadilloresult/BocadilloResult';
import {BocadilloGenerator} from './components/bocadillogenerator/BocadilloGenerator';
import {BocadilloHistorial} from './components/bocadillohistorial/BocadilloHistorial';
// import {NuevoProducto} from './components/nuevoproducto/NuevoProducto';


function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<PantallaInicial />} />
        <Route path="/generator" element={<BocadilloGenerator />} />
        <Route path="/result" element={<BocadilloResult />} />
        <Route path ="/historial" element={<BocadilloHistorial />} />
        {/* <Route path="/nuevoProducto" element={<NuevoProducto />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
