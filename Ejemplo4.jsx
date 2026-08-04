import { lazy, Suspense } from 'react';
 
// ANTES: import estático — el código va en el bundle inicial
import PanelAdmin from './PanelAdmin';
 
// DESPUÉS: import dinámico — se descarga solo cuando se necesita
const PanelAdmin = lazy(() => import('./PanelAdmin'));

function App() {
    const [mostrarAdmin, setMostrarAdmin] = useState(false);
 
    return (
        <div>
            <button onClick={() => setMostrarAdmin(true)}>Abrir panel</button>
 
            {mostrarAdmin && (
                <Suspense fallback={<p>Cargando panel...</p>}>
                    <PanelAdmin />
                </Suspense>
            )}
        </div>
    );
}
