import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router';
import { describe, expect, vi } from 'vitest';
import { CartProvider } from '../context/CartContext';
import { ProductosProvider } from '../context/ProductosContext';
import CatalogoProductos from '../components/organisms/CatalogoProductos/CatalogoProductos';
import { obtenerProductos } from '../services/productService';

vi.mock('../services/productService');

describe('Catalogo con service mock', ()=>{
    test('Muestra los productos que el service devuelve', async () => {
        obtenerProductos.mockResolvedValue([
            {
                id:1,
                nombre: "Audifonos",
                precio: 500,
                stock: 3,
                descripcion: "Buenos Audifonos",
                imagen: 'audifonos.jpg'
            },
            {
                id:2,
                nombre: "mouse",
                precio: 500,
                stock: 3,
                descripcion: "Buen mouse",
                imagen: 'mouse.jpg'
            }
        ]);

        render (
            <MemoryRouter>
                <CartProvider>
                    <ProductosProvider>
                        <CatalogoProductos />
                    </ProductosProvider>
                </CartProvider>
            </MemoryRouter>
        );

        expect(await screen.findByText('Audifonos')).toBeInTheDocument();
        expect(await screen.findByText('mouse')).toBeInTheDocument();

    });
});