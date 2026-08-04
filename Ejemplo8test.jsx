// 1. Por ROL (lo más accesible, la preferida)
screen.getByRole('button', { name: /agregar al carrito/i });
screen.getByRole('heading', { level: 2 });
 
// 2. Por LABEL (para formularios)
screen.getByLabelText('Correo electrónico');

// 3. Por TEXTO visible
screen.getByText('Audífonos');
 
// 4. Por PLACEHOLDER
screen.getByPlaceholderText('Busca un producto...');
 
// 5. Por TEST-ID (último recurso, no lo ve el usuario)
screen.getByTestId('precio-formateado');
