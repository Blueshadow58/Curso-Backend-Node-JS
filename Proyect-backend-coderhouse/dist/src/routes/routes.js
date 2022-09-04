"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsController_1 = __importDefault(require("../controllers/productsController"));
const cartController_1 = __importDefault(require("../controllers/cartController"));
const index = express_1.default.Router();
const products = express_1.default.Router();
const carts = express_1.default.Router();
index.get('*', (req, res) => res.redirect('/api/productos'));
const administrador = true;
//PRODUCTS-ROUTES
products.get('/:id?', productsController_1.default.products_list);
products.post('/', productsController_1.default.create_product);
products.put('/:id', productsController_1.default.update_product);
products.delete('/:id', productsController_1.default.delete_product);
//CART-ROUTES
carts.post('/', cartController_1.default.create_cart);
carts.delete('/', cartController_1.default.delete_cart);
carts.get('/:id/productos', cartController_1.default.cart_list_product);
carts.post('/:id/productos', cartController_1.default.add_to_cart);
carts.delete('/:id/productos/:id_prod', cartController_1.default.delete_from_cart);
module.exports = { products, carts, index };
