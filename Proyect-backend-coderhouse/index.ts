import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const app: Express = express();
dotenv.config();
const port = process.env.PORT;
const {products,index} = require('./src/routes/productsRouter') 
const {carts} = require('./src/routes/cartsRouter') 

const administrador = true;

app.use('/api/productos',products)
app.use('/api/carrito',carts)
app.use('/',index)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});