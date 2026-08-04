import FormularioProducto from "../../components/organisms/FormularioProducto/FormularioProducto";
import CatalogoProductos from "../../components/organisms/CatalogoProductos/CatalogoProductos";

function  Catalogo(){
    return(
        <div className="pagina-catalogo">
            <h1>Nuestro catálogo</h1>
            <FormularioProducto />
            <CatalogoProductos />
        </div>
    );
}

export default Catalogo;