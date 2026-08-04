import './Navbar.css';
import { NavLink } from 'react-router';
import { useCarrito } from '../../../hooks/useCarrito';
const precargarCatalogo = () => import('../../../pages/Catalogo/Catalogo');
const precargarCarrito = () => import('../../../pages/Carrito/Carrito');
const precargarPerfil = () => import('../../../pages/Perfil/Perfil');

function Navbar (){
    const { totalItems } = useCarrito();

    return(
        <nav className='navbar'>
            <NavLink to='/' className='navbar-logo'>Reto-shop</NavLink>
            <div className='navbar-links'>
                <NavLink to='/'>Inicio</NavLink>
                <NavLink to='/catalogo' onMouseEnter={precargarCatalogo}>Catálogo</NavLink>
                <NavLink to='/carrito' onMouseEnter={precargarCarrito}>Carrito ({totalItems})</NavLink>
                <NavLink to='/perfil' onMouseEnter={precargarPerfil}>Perfil</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;