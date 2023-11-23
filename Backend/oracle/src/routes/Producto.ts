import { Request, Response, Application, Router } from "express";

import { ProductoController } from '../controllers/Producto.controller';

export class ProductoRoutes {
    public ProductoController: ProductoController =  new ProductoController();

    public routes(app: Application): void {
        
        app.route("/Producto").get(this.ProductoController.getAllProducto)
        app.route("/Productos").post(this.ProductoController.create)
        app.route("/Productos/:idProducto").patch(this.ProductoController.update)
        app.route("/Productos/:id").get(this.ProductoController.getOneProducto)
        app.route("/producto/:id").delete(this.ProductoController.delete)
    }
}
