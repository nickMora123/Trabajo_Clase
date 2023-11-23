import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Product_venta, Product_ventaI } from '../models/Product_venta';

export class Product_ventaController {
    
    public async getAllProduct_venta(req: Request, res:Response){
        try {
            const product_venta: Product_ventaI[] = await Product_venta.findAll( ) // select * from product_ventas;
            res.status(200).json({product_venta})
        } catch (error) {

        }
    }

    public async update(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            cantidad,
            precio,
            total,
            ValorUnit
        }= req.body

        try {
            let body:Product_ventaI = {
                cantidad,
                precio,
                total,
                ValorUnit
            } 

            const product_ventaExist: Product_ventaI | null = await Product_venta.findByPk(pk);
          

            if(!product_ventaExist) return res.status(500).json({msg:"El Product_venta No existe"})
            await Product_venta.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk

        } catch (error) {

        }
        const product_venta: Product_ventaI | null = await Product_venta.findByPk(pk);
        if(product_venta) return res.status(200).json({product_venta})

    }

    public async create(req: Request, res:Response)
        {
            try {
                let product_venta: Product_ventaI = req.body;
                const dataProduct_venta: Product_ventaI = await Product_venta.create({ ...product_venta });
                res.status(200).json({ dataProduct_venta });
            } catch (error) {
                console.error('Error al crear el product_venta:', error);
                res.status(500).json({ message: 'Hubo un problema al crear el product_venta.' });
              }
    
        }
        public async getOneProduct_venta(req: Request, res:Response){
            const { id: idParam } = req.params
    
            try {
                const product_venta:Product_ventaI | null = await Product_venta.findOne(
                    {
                        where: { 
                            id: idParam,
                        }
                    }
                )
                if (product_venta){
                    res.status(200).json(product_venta)
                } else return  res.status(300).json({msg: "El Product_venta no existe"})
    
            } catch (error) {
                res.status(500).json({msg: "Error Internal"})
            }
        }

        public async delete(req: Request, res:Response){
            const { id:pk } = req.params;
    
    
            try {
                const product_ventaExist: Product_ventaI | null = await Product_venta.findByPk(pk);
                if(!product_ventaExist) return res.status(500).json({msg:"El Product_venta No existe"})
                await Product_venta.destroy(
                    {
                        where: {id: pk}
                    }
                )
                res.status(200).json({msg:"Product_venta Eliminado"})
            } catch (error) {
    
            }
    
        } 

     
    

}
