"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartController_1 = __importDefault(require("../controllers/cartController"));
const carts = express_1.default.Router();
//CART-ROUTES
carts.post('/', cartController_1.default.create_cart);
carts.delete('/', cartController_1.default.delete_cart);
carts.get('/:id/productos', cartController_1.default.cart_list_product);
carts.post('/:id/productos', cartController_1.default.add_to_cart);
carts.delete('/:id/productos/:id_prod', cartController_1.default.delete_from_cart);
module.exports = { carts };
