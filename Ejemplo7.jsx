import { memo } from 'react';
 
// SIN memo: se re-renderiza cada vez que el padre lo hace
function TarjetaProducto({ nombre, precio }) {
    return <div><h3>{nombre}</h3><p>${precio}</p></div>;
}
 
// CON memo: solo se re-renderiza si nombre o precio CAMBIAN
const TarjetaProducto = memo(function TarjetaProducto({ nombre, precio }) {
    return <div><h3>{nombre}</h3><p>${precio}</p></div>;
});

function TarjetaProducto({ nombre, precio }) {
    return <div><h3>{nombre}</h3><p>${precio}</p></div>;
}

export default memo(TarjetaProducto);