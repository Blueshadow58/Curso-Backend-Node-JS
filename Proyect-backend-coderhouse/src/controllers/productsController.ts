import express, { Express, Request, Response } from 'express';

class ProductsController{
    products_list(req: Request,res: Response ){
        res.send('Todos los productos')        
    }

    create_product(req: Request,res: Response ){
        res.send('Create');
    }

    update_product(req: Request,res: Response ){
        res.send('Update');
    }

    delete_product(req: Request,res: Response ){
        res.send('Delete');
    }
        
}

export default new ProductsController()