import { useEffect, useState, useMemo } from 'react';
import './CatalogoProductos.css';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import { obtenerProductos, obtenerProductosporId } from '../../../services/productService';
import Boton from '../../atoms/Boton/Boton';
import { useCarrito } from '../../../hooks/useCarrito';
import { useProductos } from '../../../hooks/useProductos'
import ProductCardSkeleton from '../../molecules/ProductCardSkeleton/ProductCardSkeleton';
import EmptyState from '../../molecules/EmptyState/EmptyState' 


function CatalogoProductos() {
  const { productos, setProductos, cargando, setCargando, error, setError, cargarProductos } = useProductos();
  const { agregarAlCarrito } = useCarrito();
  const [busqueda, setBusqueda] = useState('');
  const [hora, setHora] = useState();
  const [disponibilidad, setDisponibilidad] = useState('todos');
  const [precioMax, setPrecioMax] = useState('');

  const buscarPorId= async () => {
    const termino = busqueda.trim();

    if (termino === ''){
      cargarProductos();
      return;
    }

    if (isNaN(termino)){
      return;
    }

    setCargando(true);
    setError(null);

    try{
      const producto = await obtenerProductosporId(termino);
      setProductos([producto]);
    } catch (error){
      setError(error.message);
      setProductos([]);
    } finally {
      setCargando(false);
    }
  };

  const normalizar = (texto) =>
    texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  
  const productosVisibles = useMemo(() => {
    const filtrados = productos.filter((producto) => {
      if (busqueda.trim !== '' && !isNaN(busqueda.trim())){
        return true;
      }
      return normalizar(producto.nombre).includes(normalizar(busqueda));
    });

    const disponibles = filtrados.filter((producto) => {
      if (disponibilidad === 'disponibles'){
        return producto.stock > 0;
      }
      if (disponibilidad === 'agotados'){
        return producto.stock === 0;
      }
      return true;
    });

    return disponibles.filter((producto) => {
      if (precioMax === '') return true;
      return producto.precio <= Number(precioMax);
    });
  }, [productos, busqueda, disponibilidad, precioMax]);
  
  useEffect(() => {
    cargarProductos();
  }, []);

  useEffect(()=> {
    setHora (new Date().toLocaleTimeString());
  }, [productos]);

  useEffect(()=> {
    if (busqueda.trim() === ''){
      cargarProductos();
    }
  }, [busqueda]);

  const limpiarFiltros = () => {
    setBusqueda('');
    setDisponibilidad('todos');
    setPrecioMax('');
  }
  return (
    <div className='catalogo'>
      <div className='catalogo-filtros'>
        <Boton
          texto="Todos"
          variante='secondary'
          activo={disponibilidad === 'todos'}
          onClick={() => setDisponibilidad('todos')}
        />
        <Boton
          texto="En stock"
          variante='secondary'
          activo={disponibilidad === 'disponibles'}
          onClick={() => setDisponibilidad('disponibles')}
        />
        <Boton
          texto="Agotados"
          variante='secondary'
          activo={disponibilidad === 'agotados'}
          onClick={() => setDisponibilidad('agotados')}
        />
      </div>
      <div className='catalogo-busqueda'>
        <div className='filtro-precio'>
          <label>Precio maximo: </label>
          <input
            type='number'
            placeholder='Precio'
            value={precioMax}
            onChange={(e) => setPrecioMax(e.target.value)}
          />
        </div>
        <input
          type="text"
          className='busqueda-input'
          placeholder="Buscar producto por nombre o Id"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter') buscarPorId();
          }}
        />
        <Boton
          texto = {cargando ? "Buscando..." : "Buscar"}
          onClick={buscarPorId}
          variante='secondary'
          disabled={cargando}>
        </Boton>
      </div>
      <div className='catalogo-acciones'>
        <Boton
        texto = {cargando ? "Cargando..." : "Recargar Productos"}
        onClick={cargarProductos}
        disabled={cargando}>      
        </Boton>
        <Boton
          texto="Limpiar Filtros"
          variante='secondary'
          onClick={limpiarFiltros}
        />
      </div>
      {!error && !cargando && (
        <div className='ultima-actualizacion'>
          <span>Mostrando {productosVisibles.length} de {productos.length} productos</span>
        </div>
      )}
      {error && (
        <div className='catalogo-error'>
          <p>Ups, lo sentimos, no pudimos cargar los productos</p>
          <Boton 
            texto = "Reintentar"
            onClick={cargarProductos}>
          </Boton>
        </div>
      )}
      {cargando && (
        <div className='catalogo-grid'>
            {Array.from({length: 5}).map((_, i) =>(
              <ProductCardSkeleton key={i} />
            ))}
        </div>
      )}
      {!error && !cargando && (
        productosVisibles.length === 0 ? ( 
          <EmptyState
            icono='🔎'
            titulo='Sin Resultados'
            descripcion='No encontramos productos con los filtros agregados, Prueba otra busqueda'
            accion={{label: 'Limpiar Filtros', onClick: limpiarFiltros}}
          />
        ) : (
        <div className='catalogo-grid'>
            {productosVisibles.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onAgregar = {agregarAlCarrito}
              />
            ))}
        </div>
        )
      )}
    </div>
  )
}

export default CatalogoProductos
