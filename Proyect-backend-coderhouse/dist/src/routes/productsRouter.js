"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsController_1 = __importDefault(require("../controllers/productsController"));
const products = express_1.default.Router();
const index = express_1.default.Router();
index.get('*', (req, res) => res.redirect('/api/productos'));
//PRODUCTS-ROUTES
products.get('/:id?', productsController_1.default.products_list);
products.post('/', productsController_1.default.create_product);
products.put('/:id', productsController_1.default.update_product);
products.delete('/:id', productsController_1.default.delete_product);
module.exports = { products, index };
