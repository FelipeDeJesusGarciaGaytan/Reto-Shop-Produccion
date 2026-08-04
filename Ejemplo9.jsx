import { obtenerProductos } from '../services/productService';

vi.mock('../services/productService');   // apaga el service real
 
// en el test, decides qué devuelve:
obtenerProductos.mockResolvedValue([
    { id: 1, nombre: 'Producto de prueba' },
]);

const productoprueba = { id: 1, nombre: 'Producto de prueba' }
