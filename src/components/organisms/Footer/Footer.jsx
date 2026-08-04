import './Footer.css';
import Boton from '../../atoms/Boton/Boton';
import { memo } from 'react';

function Footer (){
    
    return (
        <footer className='footer'>
            <h3 className='footer-titulo'> Reto-Shop </h3>
            <p className='footer.info'>
                El ecommerce del curso de React Inadaptados 2026
            </p>
            <div className='footer-redes'>
                <Boton
                    texto="X"
                    variante='secondary'
                    tamano='pequeno'
                    onClick={() => alert("Redes Sociales - Proximamente")}
                />
                <Boton
                    texto="GitHub"
                    variante='secondary'
                    tamano='pequeno'
                    onClick={() => alert("Redes Sociales - Proximamente")}
                />
                <Boton
                    texto="Instagram"
                    variante='secondary'
                    tamano='pequeno'
                    onClick={() => alert("Redes Sociales - Proximamente")}
                />
            </div>

            <p className='footer-creditos'>
                2026 Inadaptados Academy - Hecho con React
            </p>
        </footer>
    );
}

export default memo(Footer);