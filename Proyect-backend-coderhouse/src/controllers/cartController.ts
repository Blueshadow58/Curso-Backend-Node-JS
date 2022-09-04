import express, { Express, Request, Response } from 'express';

class CartController{
    create_cart(req: Request,res: Response ){
        res.send('crear carro')        
    }

    delete_cart(req: Request,res: Response ){
        res.send('delete carrito');
    }

    cart_list_product(req: Request,res: Response ){
        res.send('todos los productos dentro del carro');
    }

    add_to_cart(req: Request,res: Response ){
        res.send('a;adir al carrito');
    }
     
    delete_from_cart(req: Request,res: Response ){
        res.send('delete from cart');
    }
}

export default new CartController()