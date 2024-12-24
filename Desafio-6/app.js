const stockRoutes = require('./routes/stockRoutes');
const productRoutes = require('./routes/stockRoutes');
const clientRoutes = require('./routes/stockRoutes');
const saleRoutes = require('./routes/stockRoutes');
const orderRoutes = require('./routes/stockRoutes');

// Definição das rotas da aplicação
app.use('/api', productRoutes);
app.use('/api', clientRoutes);
app.use('/api', saleRoutes);
app.use('/api', orderRoutes);
app.use('/api', stockRoutes);




//Server Connection
app.listen(3000, () => {
  console.log("Server running!")
});