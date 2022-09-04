"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartController {
    create_cart(req, res) {
        res.send('crear carro');
    }
    delete_cart(req, res) {
        res.send('delete carrito');
    }
    cart_list_product(req, res) {
        res.send('todos los productos dentro del carro');
    }
    add_to_cart(req, res) {
        res.send('a;adir al carrito');
    }
    delete_from_cart(req, res) {
        res.send('delete from cart');
    }
}
exports.default = new CartController();
