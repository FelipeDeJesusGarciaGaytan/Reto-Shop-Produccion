import './Boton.css';
import { validarOpciones, validarProps } from '../../../utils/validarProps';
import { motion } from 'framer-motion';

function Boton({
    texto = "Boton",
    variante = "primary",
    tamano = "normal",
    disabled = false,
    activo = false,
    onClick
    }) {
    validarProps('Boton', 'texto', texto, 'string');
    validarProps('Boton', 'variante', variante, 'string');
    validarProps('Boton', 'disabled', disabled, 'boolean');
    validarProps('Boton', 'activo', activo, 'boolean');
    validarOpciones('Boton', 'variante', variante, ['primary', 'secondary', 'danger']);

    const variantesValidas = ['primary', 'secondary', 'danger'];
    const varianteSegura = variantesValidas.includes(variante) ? variante : 'primary';
    const clases = `boton ${varianteSegura} ${tamano === 'normal' ? '' : tamano} ${activo ? 'activo' : ''}`;

    return (
        <motion.button
            className={clases.trim()}
            disabled={disabled}
            onClick={onClick}
            whileHover={{ scale: 1.15}}
            whileTap={{ scale: 0.85}}
        >
            {texto}
        </motion.button>
    )
}

export default Boton;