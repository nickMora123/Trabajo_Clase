import { Request, Response, Application, Router } from "express";

import { VentaController } from '../controllers/Venta.controller';

export class VentaRoutes {
    public VentaController: VentaController =  new VentaController();

    public routes(app: Application): void {
        
        app.route("/Venta").get(this.VentaController.getAllVenta)
        app.route("/Ventas").post(this.VentaController.create)
        app.route("/Ventas/:idVenta").patch(this.VentaController.update)
        app.route("/Ventas/:id").get(this.VentaController.getOneVenta)
        app.route("/venta/:id").delete(this.VentaController.delete)
    }
}
