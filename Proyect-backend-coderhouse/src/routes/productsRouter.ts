import express, { Express, Request, Response } from 'express';
import ProductsController from '../controllers/productsController'

const products =  express.Router();
const index =  express.Router();

index.get('*', (req: Request, res: Response) => res.redirect('/api/productos'));


//PRODUCTS-ROUTES
products.get('/:id?',ProductsController.products_list);
products.post('/', ProductsController.create_product);
products.put('/:id', ProductsController.update_product);
products.delete('/:id', ProductsController.delete_product);

module.exports = {products,index}