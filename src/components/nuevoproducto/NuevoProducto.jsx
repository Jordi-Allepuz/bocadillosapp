
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './NuevoProducto.css';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';


// export const NuevoProducto = () => {

//     const [producto, setProducto] = useState("");
//     const [jsonDatos, setJsonDatos] = useState({
//         tortillas: [],
//         otros: []
//     });

//     const handleInputChange = (event) => {
//         setProducto(event.target.value);
//     };

//     const agregarTortilla = () => {
//         if (producto.trim() !== "") {
//             setJsonDatos(prevJson => ({
//                 ...prevJson,
//                 tortillas: [...prevJson.tortillas, { nombre: producto }]
//             }));
//             setProducto(""); // Limpiar el campo de texto después de agregar
//         }
//     };






//     return (
//         <div>
//             <h1>Agregar Tortilla</h1>
//             <form onSubmit={(e) => { e.preventDefault(); agregarTortilla(); }}>
//                 <input
//                     type="text"
//                     value={producto}
//                     onChange={handleInputChange}
//                     placeholder="Ingrese el nombre de la tortilla"
//                 />
//                 <button type="submit">Agregar</button>
//             </form>

//         </div>
//     );


// }

// export default NuevoProducto;