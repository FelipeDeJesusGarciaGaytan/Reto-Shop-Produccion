 // GET: traer datos
const { data } = await api.get('/products');
 
// POST: crear algo
const { data: nuevo } = await api.post('/products', {
    title: 'Producto nuevo',
    price: 200,
});
