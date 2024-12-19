const stockRoutes = require('./routes/stockRoutes');


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