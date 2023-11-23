import { Request, Response, Application, Router } from "express";

import { VentaController } from '../controllers/Venta.controller';

export class VentaRoutes {
    public VentaController: VentaController =  new VentaController();

    public routes(app: Application): void {
        
        app.route("/Venta").get(this.VentaController.getAllVenta)
        app.route("/Venta").post(this.VentaController.create)
        app.route("/Venta/:id").patch(this.VentaController.update)
        app.route("/Venta/:id").get(this.VentaController.getOneVenta)
        app.route("/Venta/:id").delete(this.VentaController.delete)
    }
}
