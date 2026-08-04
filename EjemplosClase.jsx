import { useEffect } from 'react';
import Usuario from '../../Usuario/Usuario';

function App(){
    return <Usuario nombre="Carlos" edad={30} />;
}



// Usuario.jsx


function Usuario({ nombre , edad}) {
    return(
        <div>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
        </div>
    );
}

function Usuario(props) {
    return(
        <div>
            <p>Nombre: {props.nombre} </p>
            <p>Edad: {props.edad}</p>
        </div>
    );
}


// JSX

{ProductoDetalle.nombre}
onClick, onChange

{key={producto.id}}

// Eventos React

const handleAgregar = (() => {
   
})

// Bien
onClick={handleAgregar}
// Mal
onClick={handleAgregar()}



const handleAgregarNombre = ((nombre) => {
   
})

onClick={() => handleAgregarNombre(nombre="Quique")}


useEffect(() => {
    cargarProductos();
})   
 

[], corre UNA vez, al montar la pagina
[Algo], corre al montar y Cada vez que algo cambia
sin Nada, correr en CADA render

// useRef

import { useRef } from 'react';
 
// USO 1: enfocar un input automáticamente
function Buscador() {
    const inputRef = useRef(null);
    const enfocar = () => inputRef.current.focus();
    return (
        <>
            <input ref={inputRef} />
            <button onClick={enfocar}>Enfocar</button>
        </>
    );
}

// formulario useRef
import { useRef } from 'react';


function FormularioRegistro() {
  // 1. Creamos las "etiquetas" para los elementos reales de la pantalla
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);


  const alEnviar = (evento) => {
    evento.preventDefault();
    
    // Aquí simulamos que el usuario dejó el correo vacío
    const emailVacio = true; 


    if (emailVacio) {
      // 2. Usamos la etiqueta para obligar al navegador a poner el cursor ahí
      emailInputRef.current.focus();
      // Opcional: Podemos cambiarle el estilo directo en un caso extremo
      emailInputRef.current.style.borderColor = 'red'; 
      return;
    }
  };


  return (
    <form onSubmit={alEnviar}>
      {/* 3. Conectamos la etiqueta useRef con el elemento HTML */}
      <input ref={emailInputRef} type="email" placeholder="Correo" />
      <input ref={passwordInputRef} type="password" placeholder="Contraseña" />
      
      <button type="submit">Registrarse</button>
    </form>
  );
}
