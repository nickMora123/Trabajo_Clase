import { Request, Response, Application, Router } from "express";

import { ProductoController } from '../controllers/Producto.controller';

export class ProductoRoutes {
    public ProductoController: ProductoController =  new ProductoController();

    public routes(app: Application): void {
        
        app.route("/Producto").get(this.ProductoController.getAllProducto)
        app.route("/Producto").post(this.ProductoController.create)
        app.route("/Producto/:id").patch(this.ProductoController.update)
        app.route("/Producto/:id").get(this.ProductoController.getOneProducto)
        app.route("/producto/:id").delete(this.ProductoController.delete)
    }
}
