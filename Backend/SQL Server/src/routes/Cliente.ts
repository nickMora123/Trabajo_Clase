import { Request, Response, Application, Router } from "express";

import { ClienteController } from '../controllers/Cliente.controller';

export class ClienteRoutes {
    public ClienteController: ClienteController =  new ClienteController();

    public routes(app: Application): void {
        
        app.route("/Cliente").get(this.ClienteController.getAllCliente)
        app.route("/Clientes").post(this.ClienteController.create)
        app.route("/Clientes/:idCliente").patch(this.ClienteController.update)
        app.route("/Clientes/:id").get(this.ClienteController.getOneCliente)
        app.route("/cliente/:id").delete(this.ClienteController.delete)
    }
}
