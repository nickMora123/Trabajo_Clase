

import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Venta, VentaI } from '../models/Venta';

export class VentaController {
    
    public async getAllVenta(req: Request, res:Response){
        try {
            const venta: VentaI[] = await Venta.findAll( ) // select * from ventas;
            res.status(200).json({venta})
        } catch (error) {

        }
    }

    public async update(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            fecha,
            subtotal,
            impuestos,
            descuentos,
            total,
            estado,
        }= req.body

        try {
            let body:VentaI = {
                fecha,
                subtotal,
                impuestos,
                descuentos,
                total,
                estado,
            } 

            const ventaExist: VentaI | null = await Venta.findByPk(pk);
          

            if(!ventaExist) return res.status(500).json({msg:"Venta No existe"})
            await Venta.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk

        } catch (error) {

        }
        const venta: VentaI | null = await Venta.findByPk(pk);
        if(venta) return res.status(200).json({venta})

    }

    public async create(req: Request, res:Response)
    {
        try {
            let venta: VentaI = req.body;
            const dataVenta: VentaI = await Venta.create({ ...venta });
            res.status(200).json({ dataVenta });
        } catch (error) {
            console.error('Error al crear el venta:', error);
            res.status(500).json({ message: 'Hubo un problema al crear el venta.' });
          }

    }
        public async getOneVenta(req: Request, res:Response){
            const { id: idParam } = req.params
    
            try {
                const venta:VentaI | null = await Venta.findOne(
                    {
                        where: { 
                            id: idParam,
                        }
                    }
                )
                if (venta){
                    res.status(200).json(venta)
                } else return  res.status(300).json({msg: "La Venta no existe"})
    
            } catch (error) {
                res.status(500).json({msg: "Error Interno"})
            }
        }

        public async delete(req: Request, res:Response){
            const { id:pk } = req.params;
    
    
            try {
                const ventaExist: VentaI | null = await Venta.findByPk(pk);
                if(!ventaExist) return res.status(500).json({msg:"La Venta No existe"})
                await Venta.destroy(
                    {
                        where: {id: pk}
                    }
                )
                res.status(200).json({msg:"Venta Eliminada"})
            } catch (error) {
    
            }
    
        } 

     
    

}
