import { validarProps } from '../../../utils/validarProps';
import './Contenedor.css';

function Contenedor ({ titulo, children }) {
    validarProps('Contenedor', 'titulo', titulo, 'string');
    return (
        <div className='contenedor'>
            {titulo && <h3 className='contenedor-titulo'>{titulo}</h3>}
            {children}
        </div>
    );
}

export default Contenedor;