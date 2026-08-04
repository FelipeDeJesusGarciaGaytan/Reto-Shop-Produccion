import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, vi } from 'vitest';
import ProductCard from './ProductCard';

const productofake = {
    id:1,
    nombre: "Audifonos",
    precio: 500,
    stock: 3,
    descripcion: "Buenos Audifonos",
    imagen: 'audifonos.jpg'
}

function renderCard (props = {}) {
    return render(
        <MemoryRouter>
            <ProductCard producto={productofake} onAgregar={() => {}} {...props}/>
        </MemoryRouter>
    );
}

describe('ProductCard', () => {
    test('Muestra el nombre del producto', () => {
        renderCard();
        expect(screen.getByText('Audifonos')).toBeInTheDocument();
    });

    test('Muestra la descripcion del producto', () => {
        renderCard();
        expect(screen.getByText('Buenos Audifonos')).toBeInTheDocument();
    });

    test('Llama a OnAgrega con el producto al hacer clic', () => {
        const onAgregar = vi.fn();
        renderCard({ onAgregar });

        const boton = screen.getByRole('button', {name: /agregar al carrito/i});
        fireEvent.click(boton);

        expect(onAgregar).toHaveBeenCalledWith(productofake);
    });

    test('Deshabilita el boton cuado no hay stock', () => {
        renderCard({producto: {...productofake, stock:0}});
        const boton = screen.getByRole('button', {name: /sin disponibilidad/i});
        expect(boton).toBeDisabled();
    });
})