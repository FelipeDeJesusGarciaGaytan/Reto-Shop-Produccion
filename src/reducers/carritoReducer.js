export function carritoReducer(estado, accion){
    switch (accion.type){
        case 'AGREGAR': {
            const existe = estado.find((item) => item.id === accion.producto.id);
            if (existe){
                return estado.map((item) => item.id === accion.producto.id ?
                    {...item, cantidad: item.cantidad + 1} :
                    item
                );
            }
            return [...estado, {...accion.producto, cantidad: 1 }];
        }        

        case 'QUITAR': {
            return estado.filter((item) => item.id !== accion.id);
        }

        case 'CAMBIAR_CANTIDAD': {
            return estado.map((item) => item.id === accion.id
                ? {...item, cantidad: item.cantidad + accion.delta}
                : item
            )
            .filter((item) => item.cantidad > 0);
        }

        case 'VACIAR': {
            return [];
        }


        default:
            return estado;
    }
}