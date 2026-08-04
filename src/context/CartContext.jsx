import { createContext, useState, useEffect, useReducer, useCallback, useMemo} from "react";
import { carritoReducer } from "../reducers/carritoReducer";

export const CartContext = createContext();

export function CartProvider({ children }){
    const [carrito, dispatch] = useReducer(carritoReducer, [], () => {
        const carritoguardado = localStorage.getItem("carrito");
        return carritoguardado ? JSON.parse(carritoguardado) : [];
    });

    const agregarAlCarrito = useCallback((producto) => {
        dispatch({type: 'AGREGAR', producto});
    }, []);

    const quitarDelCarrito = useCallback((id) => {
        dispatch({type: 'QUITAR', id});
    }, []);

    const cambiarCantidad = useCallback((id, delta) => {
        dispatch({type: 'CAMBIAR_CANTIDAD', id, delta});
    }, []);

    const vaciarElCarrito = useCallback(() => {
        dispatch({type: 'VACIAR'});
    }, []);

    const totalItems = carrito.reduce((suma, item) => suma + item.cantidad, 0);
    const totalPrecio = carrito.reduce((suma, producto) => suma + producto.precio * producto.cantidad, 0);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);
    
    const valor = useMemo(() => ({
        carrito,
        agregarAlCarrito,
        quitarDelCarrito,
        cambiarCantidad,
        vaciarElCarrito,
        totalItems,
        totalPrecio,
     }), [carrito, agregarAlCarrito, quitarDelCarrito, cambiarCantidad,
        vaciarElCarrito, totalItems, totalPrecio]);

    return (
        <CartContext.Provider value={valor}>
            {children}
        </CartContext.Provider>
    );
}