import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";

export function useProductos(){
    const context = useContext(ProductosContext);

    if (!context) {
        throw new Error('useProductos debe usarse dentro de un ProductosProvider')
    }
    
    return context;
}

