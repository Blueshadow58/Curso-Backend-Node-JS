"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductsController {
    products_list(req, res) {
        res.send('Todos los productos');
    }
    create_product(req, res) {
        res.send('Create');
    }
    update_product(req, res) {
        res.send('Update');
    }
    delete_product(req, res) {
        res.send('Delete');
    }
}
exports.default = new ProductsController();
