import express, { Express, Request, Response } from 'express';
import CartController from '../controllers/cartController'

const carts =  express.Router();


//CART-ROUTES
carts.post('/', CartController.create_cart);
carts.delete('/', CartController.delete_cart);
carts.get('/:id/productos',CartController.cart_list_product)
carts.post('/:id/productos',CartController.add_to_cart)
carts.delete('/:id/productos/:id_prod',CartController.delete_from_cart)


module.exports = {carts}