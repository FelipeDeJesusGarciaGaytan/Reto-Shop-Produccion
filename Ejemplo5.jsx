// la MISMA función de import que usa lazy, pero la llamamos en el hover
const precargarCatalogo = () => import('./pages/Catalogo/Catalogo');
 
<a href='/catalogo' onMouseEnter={precargarCatalogo}>Catálogo test</a>