import './App.css'
import { lazy, Suspense } from 'react';
import { CartProvider } from './context/CartContext';
import Footer from './components/organisms/Footer/Footer';
import { ProductosProvider } from './context/ProductosContext';
import { Routes, Route } from 'react-router';
const Home = lazy(() => import('./pages/Home/Home'));
import Navbar from './components/organisms/Navbar/Navbar';
const Catalogo = lazy(() => import('./pages/Catalogo/Catalogo'));
const Carrito = lazy(() => import('./pages/Carrito/Carrito'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Perfil = lazy(() => import('./pages/Perfil/Perfil'));
const ProductoDetalle = lazy(() => import('./pages/ProductoDetalle/ProductoDetalle'));

function App() {  

  return (
    <ProductosProvider>
      <CartProvider>
        <Navbar />
        <Suspense fallback={<div className='page-loader'>Cargando...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/producto/:id' element={<ProductoDetalle/>} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </CartProvider>
    </ProductosProvider>
  );
}

export default App