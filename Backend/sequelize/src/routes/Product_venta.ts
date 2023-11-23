import { Request, Response, Application, Router } from "express";

import { Product_ventaController } from '../controllers/Product_venta.controller';

export class Product_ventaRoutes {
    public Product_ventaController: Product_ventaController =  new Product_ventaController();

    public routes(app: Application): void {
        
        app.route("/Product_venta").get(this.Product_ventaController.getAllProduct_venta)
        app.route("/Product_venta").post(this.Product_ventaController.create)
        app.route("/Product_venta/:id").patch(this.Product_ventaController.update)
        app.route("/Product_venta/:id").get(this.Product_ventaController.getOneProduct_venta)
        app.route("/product_venta/:id").delete(this.Product_ventaController.delete)
    }
}
