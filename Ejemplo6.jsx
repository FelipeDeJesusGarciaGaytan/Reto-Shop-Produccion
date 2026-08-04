// COMPONENTE HIJO MALLL
function ElementoLista() {
  return (
    <>
      <li>Manzana</li>
      <li>Plátano</li>
    </>
  );
}

// COMPONENTE PADRE
function Lista() {
  return (
    <ul>
      <ElementoLista />
    </ul>
  );
}

import { Fragment } from 'react';
 
// COMPONENTE HIJO
function ElementoLista() {
  return (
    <> {/* <--- Fragment no genera ninguna etiqueta en el HTML */}
      <li>Manzana</li>
      <li>Plátano</li>
    </>
  );
}


// Puedes ser <> o <Fragment>
// COMPONENTE PADRE
function Lista() {
  return (
    <ul>
      <ElementoLista />
    </ul>
  );
}


{items.map((item) => (
    <Fragment key={item.id}>  
        <p>{item.termino}</p>
        <h2>{item.definicion}</h2>
    </Fragment>
))}
