import { Request, Response, Application, Router } from "express";

import { Tipo_ProductoController } from '../controllers/Tipo_producto.controller';

export class Tipo_ProductoRoutes {
    public Tipo_ProductoController: Tipo_ProductoController =  new Tipo_ProductoController();

    public routes(app: Application): void {
        
        app.route("/Tipo_Producto").get(this.Tipo_ProductoController.getAllTipo_Producto)
        app.route("/Tipo_Producto").post(this.Tipo_ProductoController.create)
        app.route("/Tipo_Producto/:id").patch(this.Tipo_ProductoController.update)
        app.route("/Tipo_Producto/:id").get(this.Tipo_ProductoController.getOneTipo_Producto)
        app.route("/Tipo_Producto/:id").delete(this.Tipo_ProductoController.delete)
    }
}
