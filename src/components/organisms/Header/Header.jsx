import Boton from '../../atoms/Boton/Boton';
import Contenedor from '../../atoms/Contenedor/Contenedor';
import ContadorCarrito from '../../atoms/ContadorCarrito/ContadorCarrito';
import './Header.css';
import { useCarrito } from '../../../hooks/useCarrito';
import PrecioTag from '../../atoms/PrecioTag/PrecioTag';

function Header(){

    const { totalItems, totalPrecio, vaciarElCarrito } = useCarrito();

    return(
        <header className='header'>
            <div>
                <h1 className='header-logo'>Reto-Shop</h1>
                <p className='header-subtitle'>Abrir consola del navegador con F12</p>
            
                <Contenedor titulo="¿Por qué comprar con nosotros?">
                    <ul>
                    <li className='header-subtitle'><strong>Envío Express:</strong> Recibe tus productos en -24hr</li>
                    <li className='header-subtitle'><strong>Compra segura:</strong> Tu dinero esta siempre protegido</li>
                    <li className='header-subtitle'><strong>Garantia:</strong> Si tu producto llega en mal estado tienes 1 año de garantia</li>
                    </ul>
                </Contenedor>
            </div>
            <div className='header-actions'>
                <PrecioTag precio={totalPrecio} />
                <ContadorCarrito cantidad={totalItems} />
                <Boton
                    texto = "Ver carrito"
                    variante='primary'
                    tamano='grande'
                    onClick={() => alert('Ver Carrito - Proximamente')}
                />
                <Boton
                    texto = "Vaciar"
                    variante='danger'
                    tamano='pequeno'
                    disabled={totalItems === 0}
                    onClick={vaciarElCarrito}
                />
            </div>
      </header>
    );
}

export default Header;