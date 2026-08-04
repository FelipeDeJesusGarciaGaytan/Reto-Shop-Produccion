import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { CartProvider } from '../context/CartContext';
import { useCarrito } from '../hooks/useCarrito';
import Navbar from '../components/organisms/Navbar/Navbar';
import ProductCard from '../components/molecules/ProductCard/ProductCard';
import { expect } from 'vitest';
import CarritoLista from '../components/organisms/CarritoLista/CarritoLista';

const productofake = {
    id:2,
    nombre: "Audifonos",
    precio: 500,
    stock: 3,
    descripcion: "Buenos Audifonos",
    imagen: 'audifonos.jpg'
}

function AppDePrueba () {
    const { agregarAlCarrito } = useCarrito();

    return (
        <>
            <Navbar />
            <ProductCard producto={productofake} onAgregar={agregarAlCarrito} />
            <CarritoLista />
        </>
    );
}

describe('Integracion: Agregar al carrito', () =>{
    test('al hacer click en Agregar, el contador del Navbar sube', () => {
        localStorage.clear()
        render(
            <MemoryRouter>
                <CartProvider>
                    <AppDePrueba />
                </CartProvider>
            </MemoryRouter>
        );

        expect(screen.getByText('Carrito (0)')).toBeInTheDocument();

        const boton = screen.getByRole('button', {name: /agregar al carrito/i});
        fireEvent.click(boton);

        expect(screen.getByText('Carrito (1)')).toBeInTheDocument();

    });

    test('al hacer click en Agregar, el total del carrito se actualiza', () => {
        localStorage.clear();

        render(
            <MemoryRouter>
                <CartProvider>
                    <AppDePrueba />
                </CartProvider>
            </MemoryRouter>
        );

        expect(screen.getByText('Tu carrito esta vacio')).toBeInTheDocument();

        const boton = screen.getByRole('button', {name: /agregar al carrito/i});
        fireEvent.click(boton);

        expect(screen.getByText('Total: $500')).toBeInTheDocument();
    })
});


